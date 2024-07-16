import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'

function AddToCartSubmit(): ReactElement {
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
