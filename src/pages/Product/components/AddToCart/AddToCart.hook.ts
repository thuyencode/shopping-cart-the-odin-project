import { useContext } from 'react'
import { AddToCartContext } from './AddToCart.context'

export default function useAddToCartContext(): AddToCartContext {
  const context = useContext(AddToCartContext)

  if (context == null) {
    throw new Error('Must be used within AddToCart.')
  }

  return context
}
