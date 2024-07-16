import useCart from '@/hooks/useCart'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'

function CartSummaryCard(): ReactElement {
  const { totalPrice, totalItems } = useCart()

  return (
    <div className='card sticky top-28 w-full bg-base-300 max-lg:mx-auto sm:w-96'>
      <div className='card-body gap-5'>
        <h4 className='card-title'>Order summary</h4>

        <div className='space-y-1'>
          <p className='flex justify-between'>
            <span className='opacity-80'>Total items</span>
            <span className='font-semibold'>{totalItems}</span>
          </p>
          <div className='divider'></div>
          <p className='flex justify-between'>
            <span className='opacity-80'>Total price</span>
            <span className='font-semibold'>${totalPrice}</span>
          </p>
        </div>

        <div className='card-actions mt-5'>
          <button className='btn btn-primary btn-block text-base'>
            Checkout
            <Icon className='text-xl' icon={'mdi:credit-card'} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSummaryCard
