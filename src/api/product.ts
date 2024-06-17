import { type Product } from '@/lib/types'
import { baseApi } from './base'

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
