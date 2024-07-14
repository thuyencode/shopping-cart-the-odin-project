import { getCart } from '@/lib/api'
import { productsQuery } from '@/lib/query'
import { type Cart, type ProductInCart } from '@/lib/types'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function cartQuery() {
  return queryOptions({
    queryKey: ['cart'],
    queryFn: async ({ signal }) => await getCart({ signal })
  })
}

function useCart(): {
  cart: Cart[]
  productsInCart: ProductInCart[]
  totalPrice: number
  totalItems: number
} {
  const { data: cart } = useSuspenseQuery(cartQuery())
  const { data: products } = useSuspenseQuery(productsQuery({}))

  const productsInCart = useMemo<ProductInCart[]>(
    () =>
      cart
        .map((c) =>
          c.products.map((p) => {
            return { ...p, date: c.date }
          })
        )
        .flat()
        .map(({ productId, quantity, date }) => {
          const product = products.find((product) => product.id === productId)

          if (product === undefined) {
            return undefined
          }

          return { ...product, quantity, date: new Date(date) }
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

  return { cart, productsInCart, totalPrice, totalItems }
}

export default useCart
