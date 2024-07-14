import useCart from '@/hooks/useCart'
import { type ReactElement } from 'react'

function CartSummaryCard(): ReactElement {
  const { totalPrice, totalItems } = useCart()

  return (
    <div className='card sticky top-28 w-96 bg-base-300 max-lg:mx-auto'>
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
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSummaryCard
