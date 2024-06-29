export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type Category =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing"
  | ''

export interface Cart {
  id: number
  userId: number
  date: string
  products: Array<{
    productId: number
    quantity: number
  }>
  __v: 0
}

export interface User {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstName: string
    lastName: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

export type SortIn = 'asc' | 'desc' | ''
