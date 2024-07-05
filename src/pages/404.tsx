import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function NotFoundRoutePage(): ReactElement {
  return (
    <div className='hero-content flex-col gap-7'>
      <h1 className='text-error'>404 - Not Found</h1>

      <Link to={'/'}>
        <button className='btn btn-info gap-1 lg:btn-lg'>
          <Icon className='text-lg lg:text-xl' icon={'mdi:arrow-left-bold'} />
          Go back to home page
        </button>
      </Link>
    </div>
  )
}

export default NotFoundRoutePage
