import { getCart } from '@/lib/api'
import { productsQuery } from '@/lib/query'
import { type Cart, type Product } from '@/lib/types'
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
  productsInCart: Array<Product & { quantity: number }>
  totalPrice: number
  totalItems: number
} {
  const { data: cart } = useSuspenseQuery(cartQuery())
  const { data: products } = useSuspenseQuery(productsQuery({}))

  const productsInCart = useMemo<Array<Product & { quantity: number }>>(
    () =>
      cart
        .map((c) => c.products)
        .flat()
        .map(({ productId, quantity }) => {
          const product = products.find((product) => product.id === productId)

          if (product === undefined) {
            return undefined
          }

          return { ...product, quantity }
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
