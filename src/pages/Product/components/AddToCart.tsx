import { Icon } from '@iconify/react'
import { useState, type ChangeEvent, type ReactElement } from 'react'

function AddToCart(): ReactElement {
  const [quantity, setQuantity] = useState(1)

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

  return (
    <form className='join border border-neutral' action='#'>
      <button
        className='btn btn-primary join-item gap-1 sm:text-base'
        type='submit'
      >
        Add to cart
        <Icon className='text-lg sm:text-xl' icon={'mdi:cart-variant'} />
      </button>

      <button type='button' className='btn join-item' onClick={addOne}>
        <Icon icon={'mdi:add'} />
      </button>
      <input
        type='text'
        className='btn join-item max-w-14'
        min={1}
        max={99}
        value={quantity}
        onChange={onChangeHandler}
      />
      <button type='button' className='btn join-item' onClick={minusOne}>
        <Icon icon={'mdi:minus'} />
      </button>
    </form>
  )
}

export default AddToCart
