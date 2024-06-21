import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button, Hero } from 'react-daisyui'
import { Link } from 'react-router-dom'

function HomePage(): ReactElement {
  return (
    <Hero.Content className='flex-col gap-7 text-center'>
      <h1>Welcome to the home page!</h1>

      <Link to={'/products'}>
        <Button className='gap-1 capitalize md:btn-lg' color='primary'>
          Check our products
          <Icon className='text-lg md:text-xl' icon={'mdi:shopping'} />
        </Button>
      </Link>
    </Hero.Content>
  )
}

export default HomePage
