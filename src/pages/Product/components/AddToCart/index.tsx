import useCart from '@/hooks/useCart'
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type PropsWithChildren,
  type ReactElement
} from 'react'
import { useParams } from 'react-router-dom'
import { AddToCartContext } from './AddToCart.context'
import AddToCartQuantity from './AddToCartQuantity'
import AddToCartSubmit from './AddToCartSubmit'

function AddToCart({ children }: PropsWithChildren): ReactElement {
  const params = useParams()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  function addOne(): void {
    setQuantity((prev) => (prev >= 99 ? 99 : prev + 1))
  }

  function minusOne(): void {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>): void {
    let value = Number(e.target.value)

    if (Number.isNaN(value)) {
      value = 1
    }

    if (value >= 99) {
      value = 99
    }

    if (value <= 1) {
      value = 1
    }

    setQuantity(value)
  }

  function onSubmit(e: FormEvent): void {
    e.preventDefault()

    addToCart({ productId: Number(params.id), quantity })
  }

  return (
    <form className='join border border-neutral' onSubmit={onSubmit}>
      <AddToCartContext.Provider
        value={{ quantity, addOne, minusOne, onChangeHandler }}
      >
        {children}
      </AddToCartContext.Provider>
    </form>
  )
}

AddToCart.Quantity = AddToCartQuantity
AddToCart.Submit = AddToCartSubmit

export default AddToCart
