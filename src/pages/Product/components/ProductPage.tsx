import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button, Card, Hero } from 'react-daisyui'
import { Link, useLoaderData } from 'react-router-dom'
import Rating from './Rating'

function ProductPage(): ReactElement {
  const product = useLoaderData() as Product

  return (
    <Hero.Content className='mb-20 mt-5 w-full self-start md:mt-28'>
      <Card className='rounded-none max-md:gap-10' side='md' bordered={false}>
        <Card.Image
          className='w-full !max-w-96 self-start rounded'
          src={product.image}
        />

        <Card.Body className='flex-1 gap-5 py-0 pr-0 max-md:p-0'>
          <Card.Title className='justify-between capitalize max-sm:flex-col max-sm:items-start md:flex-col md:items-start'>
            <h2>{product.title}</h2>
            <span className='text-sm font-light sm:text-base'>
              {product.category}
            </span>
          </Card.Title>

          <div className='flex items-center justify-between gap-2 md:flex-col md:items-start'>
            <h3>${product.price}</h3>
            <Rating rating={product.rating} />
          </div>

          <Card.Actions className='max-md:justify-between'>
            <Button className='gap-1 sm:text-base' color='primary'>
              Add to cart{' '}
              <Icon className='text-lg sm:text-xl' icon={'mdi:cart-variant'} />
            </Button>
            <Link to={'/products'}>
              <Button className='gap-1 sm:text-base' color='neutral'>
                More products{' '}
                <Icon className='text-lg sm:text-xl' icon={'mdi:shopping'} />
              </Button>
            </Link>
          </Card.Actions>

          <span className='font-light first-letter:uppercase'>
            {product.description}
          </span>
        </Card.Body>
      </Card>
    </Hero.Content>
  )
}

export default ProductPage
