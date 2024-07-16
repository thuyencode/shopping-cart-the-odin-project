import { Icon } from '@iconify/react/dist/iconify.js'
import { type ReactElement } from 'react'
import useAddToCartContext from './AddToCart.hook'

function AddToCartQuantity(): ReactElement {
  const { quantity, addOne, minusOne, onChangeHandler } = useAddToCartContext()

  return (
    <>
      <button type='button' className='btn join-item' onClick={addOne}>
        <Icon icon={'mdi:add'} />
      </button>
      <input
        type='text'
        className='btn join-item max-w-14'
        name='quantity'
        min={1}
        max={99}
        value={quantity}
        onChange={onChangeHandler}
      />
      <button type='button' className='btn join-item' onClick={minusOne}>
        <Icon icon={'mdi:minus'} />
      </button>
    </>
  )
}

export default AddToCartQuantity
