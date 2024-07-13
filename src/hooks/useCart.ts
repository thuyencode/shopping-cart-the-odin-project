import { getCarts } from '@/lib/api'
import { productsQuery } from '@/lib/query'
import { type Cart, type Product } from '@/lib/types'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function cartsQuery() {
  return queryOptions({
    queryKey: ['cart'],
    queryFn: async ({ signal }) => await getCarts({ signal })
  })
}

function useCart(): {
  carts: Cart[] | undefined
  products: Product[] | undefined
  getTotalPrice: () => number
  getTotalItems: () => number
} {
  const { data: carts } = useSuspenseQuery(cartsQuery())
  const { data: products } = useSuspenseQuery(productsQuery({}))

  function getTotalPrice(): number {
    return carts?.reduce(
      (acc, cart) =>
        acc +
        cart.products.reduce(
          (acc, product) =>
            acc +
            product.quantity *
              (products.find((p) => p.id === product.productId)?.price ?? 0),
          0
        ),
      0
    )
  }

  function getTotalItems(): number {
    return carts?.reduce(
      (acc, cart) =>
        acc + cart.products.reduce((acc, product) => acc + product.quantity, 0),
      0
    )
  }

  return { carts, products, getTotalPrice, getTotalItems }
}

export default useCart
