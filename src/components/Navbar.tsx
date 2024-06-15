import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function Navbar(): ReactElement {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Product</Link>
        </li>
        <li>
          <Link to={'/cart'}>Your Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
