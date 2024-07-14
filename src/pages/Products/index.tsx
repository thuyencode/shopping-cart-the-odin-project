/* eslint-disable react-refresh/only-export-components */
import { categoriesQuery, productsQuery } from '@/lib/query'
import { type Category, type SortIn } from '@/lib/types'
import { type QueryClient } from '@tanstack/react-query'
import { lazy, type ReactElement, Suspense } from 'react'
import { type LoaderFunctionArgs } from 'react-router-dom'

export function productsLoader(queryClient: QueryClient) {
  return async function ({ request }: LoaderFunctionArgs) {
    const searchParams = new URL(request.url).searchParams
    const category = (searchParams.get('category') ?? undefined) as
      | Category
      | undefined
    const sortIn = (searchParams.get('sortIn') ?? undefined) as
      | SortIn
      | undefined
    const search = searchParams.get('search') ?? undefined

    const filters = { category, sortIn, search }

    await queryClient.ensureQueryData(productsQuery(filters))
    await queryClient.ensureQueryData(categoriesQuery())

    return { filters }
  }
}

const ProductsPage = lazy(async () => await import('./ProductsPage'))

export const LazyProductsPage = (): ReactElement => (
  <Suspense>
    <ProductsPage />
  </Suspense>
)
