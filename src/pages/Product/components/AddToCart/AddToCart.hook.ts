import { useContext } from 'react'
import {
  AddToCartContext,
  type AddToCartContextState
} from './AddToCart.context'

export default function useAddToCartContext(): AddToCartContextState {
  const context = useContext(AddToCartContext)

  if (context == null) {
    throw new Error('Must be used within AddToCart.')
  }

  return context
}
