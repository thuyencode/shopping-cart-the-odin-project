import { type Category, type Product } from '@/lib/types'
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
    .then((res) => {
      if (res.data === '') {
        return new Promise((resolve) => {
          resolve({
            id: 0,
            title: `There's no such product with ID ${options.id}.`,
            price: 0,
            description: 'Please choose a product from the Products page.',
            category: '',
            image: 'https://placehold.co/400x400?text=Not+Found',
            rating: {
              rate: 0,
              count: 0
            }
          })
        })
      }

      return res.data
    })
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

export async function getCategories(options: {
  signal: AbortSignal
}): Promise<Category[]> {
  return await baseApi
    .get('products/categories', {
      signal: options.signal
    })
    .then((res) => res.data)
}
