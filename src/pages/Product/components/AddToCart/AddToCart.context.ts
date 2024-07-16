import { type ChangeEvent, createContext } from 'react'

export interface AddToCartContextState {
  quantity: number
  addOne: () => void
  minusOne: () => void
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AddToCartContext = createContext<AddToCartContextState | null>(
  null
)
