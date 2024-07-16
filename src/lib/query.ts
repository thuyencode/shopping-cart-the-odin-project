/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { queryOptions } from '@tanstack/react-query'
import { getCategories, getProducts, type GetProductsArgs } from './api'

export function productsQuery(filters: Omit<GetProductsArgs, 'signal'>) {
  return queryOptions({
    queryKey: ['products', filters],
    queryFn: async ({ signal }) => await getProducts({ signal, ...filters })
  })
}

export function categoriesQuery() {
  return queryOptions({
    queryKey: ['categories'],
    queryFn: async ({ signal }) => await getCategories({ signal })
  })
}
