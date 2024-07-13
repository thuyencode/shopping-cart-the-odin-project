/* eslint-disable react-hooks/exhaustive-deps */
import useCart from '@/hooks/useCart'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function ViewCartNavbar(): ReactElement {
  const { getTotalPrice, getTotalItems } = useCart()

  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-ghost' tabIndex={0} role='button'>
        <div className='indicator'>
          <div
            className='badge indicator-item badge-primary badge-sm'
            aria-label='Badge'
          >
            {getTotalItems()}
          </div>
          <Icon className='text-xl lg:text-2xl' icon={'mdi:cart-variant'} />
        </div>
      </summary>

      <div
        className='card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-300 !p-0'
        tabIndex={0}
      >
        <div className='card-body'>
          <h4 className='font-bold'>
            {getTotalItems()} {getTotalItems() === 1 ? 'Item' : 'Items'}
          </h4>

          <span className='text-info'>Subtotal: ${getTotalPrice()}</span>

          <div className='card-actions'>
            <NavLink
              className='btn btn-primary btn-block'
              to={'/cart'}
              role='button'
            >
              View cart
            </NavLink>
          </div>
        </div>
      </div>
    </details>
  )
}

export default ViewCartNavbar
