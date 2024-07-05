import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function HomePage(): ReactElement {
  return (
    <div className='hero-content flex-col gap-7' role='banner'>
      <h1>Welcome to the home page!</h1>

      <Link to={'/products'}>
        <button className='btn btn-primary gap-1 capitalize lg:btn-lg'>
          Check our products
          <Icon className='text-lg lg:text-xl' icon={'mdi:shopping'} />
        </button>
      </Link>
    </div>
  )
}

export default HomePage
