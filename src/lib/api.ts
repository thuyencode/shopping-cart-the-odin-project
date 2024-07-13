import {
  type Cart,
  type Category,
  type Product,
  type SortIn
} from '@/lib/types'
import Axios from 'axios'

export const baseApi = Axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

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

export interface GetProductsArgs {
  signal: AbortSignal
  category?: Category
  sortIn?: SortIn
  search?: string
}

export async function getProducts(
  options: GetProductsArgs
): Promise<Product[]> {
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
    .then((data: Product[]) => {
      const search = options.search

      if (search === undefined) {
        return data
      }

      return data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    })
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

export async function getCart(options: {
  signal: AbortSignal
}): Promise<Cart[]> {
  return await baseApi
    .get('/carts/user/1', {
      signal: options.signal
    })
    .then((res) => res.data)
}

export async function postToCart(options: {
  signal: AbortSignal
  body: Omit<Cart, 'id' | '__v'>
}): Promise<Cart> {
  return await baseApi
    .post('carts', options.body, {
      signal: options.signal
    })
    .then((res) => res.data)
}
