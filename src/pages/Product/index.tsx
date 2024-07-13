/* eslint-disable react-refresh/only-export-components */
import { getProduct } from '@/lib/api'
import { queryOptions, type QueryClient } from '@tanstack/react-query'
import { lazy } from 'react'
import { redirect, type LoaderFunctionArgs } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function productDetailQuery(id: string) {
  return queryOptions({
    queryKey: ['products', id],
    queryFn: async ({ signal }) => await getProduct({ id, signal })
  })
}

export function productLoader(queryClient: QueryClient) {
  return async function ({
    params
  }: LoaderFunctionArgs): Promise<Response | { productId: string }> {
    if (params.id === undefined) {
      return redirect('/products')
    }

    await queryClient.ensureQueryData(productDetailQuery(params.id))

    return { productId: params.id }
  }
}

export const ProductPage = lazy(async () => await import('./ProductPage'))
