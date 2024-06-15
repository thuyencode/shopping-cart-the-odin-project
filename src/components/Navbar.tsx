import { type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(): ReactElement {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-green-400' : '')}
            to={'/'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-green-400' : '')}
            to={'/products'}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'text-green-400' : '')}
            to={'/cart'}
          >
            Your Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
