import { type MutationStatus } from '@tanstack/react-query'
import { type ChangeEvent, createContext } from 'react'

export interface AddToCartContext {
  quantity: number
  addOne: () => void
  minusOne: () => void
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  status: MutationStatus
}

export const AddToCartContext = createContext<AddToCartContext | null>(null)
