import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import useAddToCartContext from './AddToCart.hook'

function AddToCartSubmit(): ReactElement {
  const { status } = useAddToCartContext()

  if (status === 'success') {
    return (
      <div className='btn btn-success join-item gap-1 sm:text-base'>
        Added to cart
        <Icon className='text-lg sm:text-xl' icon={'mdi:success-circle'} />
      </div>
    )
  }

  return (
    <button
      className='btn btn-primary join-item gap-1 sm:text-base'
      type='submit'
    >
      Add to cart
      <Icon className='text-lg sm:text-xl' icon={'mdi:cart-variant'} />
    </button>
  )
}

export default AddToCartSubmit
