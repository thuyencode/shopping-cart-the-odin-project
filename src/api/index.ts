import { type Product } from '@/lib/types'
import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const baseApi = setupCache(
  Axios.create({ baseURL: import.meta.env.VITE_API_URL })
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
}): Promise<Product[]> {
  return await baseApi
    .get('products?limit=10', {
      signal: options.signal
    })
    .then((res) => res.data)
}
