import { type Product } from '@/lib/types'
import { baseApi } from './base'

export async function getProducts(options: {
  signal: AbortSignal
}): Promise<Product[]> {
  return await baseApi
    .get('products?limit=10', {
      signal: options.signal
    })
    .then((res) => res.data)
}
