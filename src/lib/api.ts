import { type Category, type Product, type SortIn } from '@/lib/types'
import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const baseApi = setupCache(
  Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    validateStatus: (status: number) => status === 200
  })
)

export async function getProduct(options: {
  id: string
  signal: AbortSignal
}): Promise<Product> {
  return await baseApi
    .get(`products/${options.id}`, {
      signal: options.signal
    })
    .then((res) => res.data)
}

export async function getProducts(options: {
  signal: AbortSignal
  category?: Category
  sortIn?: SortIn
}): Promise<Product[]> {
  let query = 'products'

  if (options.category !== undefined) {
    query += `/category/${options.category}`
  }

  if (options.sortIn !== undefined) {
    query += `?sort=${options.sortIn}`
  }

  return await baseApi
    .get(query, {
      signal: options.signal
    })
    .then((res) => res.data)
}

export async function getCategories(options: {
  signal: AbortSignal
}): Promise<Category[]> {
  return await baseApi
    .get('products/categories', {
      signal: options.signal
    })
    .then((res) => res.data)
}
