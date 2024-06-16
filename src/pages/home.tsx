import { type ReactElement } from 'react'
import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom'

function HomePage(): ReactElement {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-10'>
      <h1>Welcome to the home page!</h1>
      <Link to={'/products'}>
        <Button className='capitalize' color='primary' size='lg'>
          Check our products
        </Button>
      </Link>
    </div>
  )
}

export default HomePage
