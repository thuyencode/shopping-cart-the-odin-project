import { getCart, postToCart } from '@/lib/api'
import { productsQuery } from '@/lib/query'
import { type CartWithUUID, type ProductInCart } from '@/lib/types'
import {
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query'
import { type UUID } from 'crypto'
import { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function cartQuery() {
  return queryOptions({
    queryKey: ['cart'],
    queryFn: async ({ signal }): Promise<CartWithUUID[]> => {
      const data = await getCart({ signal })

      return data.map((d) => {
        return { ...d, cartUUID: window.crypto.randomUUID() }
      })
    }
  })
}

interface AddToCartArgs {
  productId: number
  quantity: number
}

interface RemoveFromCartArgs {
  productId: number
  cartUUID: UUID
}

function useCart(): {
  cart: CartWithUUID[]
  productsInCart: ProductInCart[]
  totalPrice: number
  totalItems: number
  addToCart: (args: AddToCartArgs) => void
  removeFromCart: (args: RemoveFromCartArgs) => void
} {
  const { data: cart } = useSuspenseQuery(cartQuery())
  const { data: products } = useSuspenseQuery(productsQuery({}))
  const queryClient = useQueryClient()

  const addToCartMutation = useMutation({
    mutationKey: ['addToCart'],
    mutationFn: async ({
      productId,
      quantity
    }: AddToCartArgs): Promise<CartWithUUID> => {
      const data = await postToCart({
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId, quantity }]
      })

      const cartWithUUID: CartWithUUID = {
        ...data,
        cartUUID: window.crypto.randomUUID()
      }

      return cartWithUUID
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
        refetchType: 'none'
      })

      queryClient.setQueryData(['cart'], [data, ...cart])
    }
  })

  const removeFromCartMutation = useMutation({
    mutationKey: ['removeFromCart'],
    mutationFn: async ({
      productId,
      cartUUID
    }: RemoveFromCartArgs): Promise<void> => {
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
        refetchType: 'none'
      })

      queryClient.setQueryData(
        ['cart'],
        cart
          .map((c) => {
            if (c.cartUUID !== cartUUID) {
              return c
            }

            return {
              ...c,
              products: c.products.filter((p) => p.productId !== productId)
            }
          })
          .filter((c) => c.products.length > 0)
      )
    }
  })

  const productsInCart = useMemo<ProductInCart[]>(
    () =>
      cart
        .map((c) =>
          c.products.map((p) => {
            return { ...p, date: c.date, cartUUID: c.cartUUID }
          })
        )
        .flat()
        .map(({ productId, quantity, date, cartUUID }) => {
          const product = products.find((product) => product.id === productId)

          if (product === undefined) {
            return undefined
          }

          return {
            ...product,
            quantity,
            date: new Date(date),
            cartUUID
          }
        })
        .filter((product) => product !== undefined),
    [cart, products]
  )

  const totalPrice = useMemo(
    () =>
      productsInCart.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
      ),
    [productsInCart]
  )

  const totalItems = useMemo(
    () => productsInCart.reduce((acc, product) => acc + product.quantity, 0),
    [productsInCart]
  )

  function addToCart({
    productId,
    quantity
  }: {
    productId: number
    quantity: number
  }): void {
    addToCartMutation.mutate({ productId, quantity })
  }

  function removeFromCart({ productId, cartUUID }: RemoveFromCartArgs): void {
    removeFromCartMutation.mutate({ productId, cartUUID })
  }

  return {
    cart,
    productsInCart,
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart
  }
}

export default useCart
