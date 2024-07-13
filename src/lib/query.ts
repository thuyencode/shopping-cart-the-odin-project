import { queryOptions } from '@tanstack/react-query'
import { getCategories, getProducts, type GetProductsArgs } from './api'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function productsQuery(filters: Omit<GetProductsArgs, 'signal'>) {
  return queryOptions({
    queryKey: ['products', filters],
    queryFn: async ({ signal }) => await getProducts({ signal, ...filters })
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function categoriesQuery() {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: async ({ signal }) => await getCategories({ signal })
  })
}
