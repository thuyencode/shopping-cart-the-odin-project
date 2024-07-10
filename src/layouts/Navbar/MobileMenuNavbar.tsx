import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function MobileMenuNavbar(): ReactElement {
  return (
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
  )
}

export default MobileMenuNavbar
