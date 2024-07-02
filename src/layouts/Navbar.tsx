import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(): ReactElement {
  return (
    <nav
      className='navbar sticky top-0 z-10 bg-base-100 shadow-lg'
      role='navigation'
      aria-label='Navbar'
    >
      <div className='navbar-start gap-2.5 max-md:flex-1'>
        <details className='dropdown md:hidden'>
          <summary className='btn btn-ghost btn-sm' tabIndex={0}>
            <Icon className='text-xl' icon={'mdi:hamburger-menu'} />
          </summary>

          <ul
            className='menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-300'
            tabIndex={0}
            role='menu'
          >
            <li role='menuitem'>
              <NavLink
                className={({ isActive }) => (isActive ? '!text-primary' : '')}
                to={'/'}
              >
                <h4 className='inline-flex items-center gap-1'>
                  <Icon icon={'mdi:home'} />
                  Home
                </h4>
              </NavLink>
            </li>
            <li role='menuitem'>
              <NavLink
                className={({ isActive }) => (isActive ? '!text-primary' : '')}
                to={'/products'}
              >
                <h4 className='inline-flex items-center gap-1'>
                  <Icon icon={'mdi:shopping'} />
                  Products
                </h4>
              </NavLink>
            </li>
          </ul>
        </details>

        <h3>The Fake Store</h3>
      </div>

      <div className='navbar-end gap-1 max-md:w-max'>
        <NavLink
          className={({ isActive }) =>
            `btn btn-ghost max-md:hidden ${isActive ? 'text-primary' : ''}`
          }
          to={'/'}
        >
          <h4 className='inline-flex items-center gap-1'>
            <Icon icon={'mdi:home'} />
            Home
          </h4>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `btn btn-ghost max-md:hidden ${isActive ? 'text-primary' : ''}`
          }
          to={'/products'}
        >
          <h4 className='inline-flex items-center gap-1'>
            <Icon icon={'mdi:shopping'} />
            Products
          </h4>
        </NavLink>

        <details className='dropdown dropdown-end'>
          <summary className='btn btn-ghost' tabIndex={0} role='button'>
            <div className='indicator'>
              <div
                className='badge indicator-item badge-primary badge-sm'
                aria-label='Badge'
              >
                8
              </div>
              <Icon className='text-xl lg:text-2xl' icon={'mdi:cart-variant'} />
            </div>
          </summary>

          <div
            className='card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-300 !p-0'
            tabIndex={0}
          >
            <div className='card-body'>
              <h4 className='font-bold'>8 Items</h4>

              <span className='text-info'>Subtotal: $999</span>

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
      </div>
    </nav>
  )
}

export default Navbar
