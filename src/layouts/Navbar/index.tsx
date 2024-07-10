import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenuNavbar from './MobileMenuNavbar'
import ViewCartNavbar from './ViewCartNavbar'

function Navbar(): ReactElement {
  return (
    <nav
      className='navbar sticky top-0 z-10 bg-base-100 shadow-lg'
      role='navigation'
      aria-label='Navbar'
    >
      <div className='navbar-start gap-2.5 max-md:flex-1'>
        <MobileMenuNavbar />

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

        <ViewCartNavbar />
      </div>
    </nav>
  )
}

export default Navbar
