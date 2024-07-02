import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Rating from './Rating'

function ProductPage(): ReactElement {
  const product = useLoaderData() as Product

  return (
    <div className='hero-content mb-20 mt-5 w-full self-start md:mt-20'>
      <div className='card rounded-none md:card-side max-md:gap-10' role='Card'>
        <figure>
          <img
            className='w-full !max-w-96 self-start rounded'
            src={product.image}
          />
        </figure>

        <div className='card-body flex-1 gap-5 py-0 pr-0 max-md:p-0'>
          <div className='card-title justify-between capitalize max-sm:flex-col max-sm:items-start md:flex-col md:items-start'>
            <h2>{product.title}</h2>
            <span className='text-sm font-light sm:text-base'>
              {product.category}
            </span>
          </div>

          <div className='flex items-center justify-between gap-2 md:flex-col md:items-start'>
            <h3>${product.price}</h3>
            <Rating rating={product.rating} />
          </div>

          <div className='card-actions max-md:justify-between'>
            {product.id !== 0 ? (
              <button className='btn btn-primary gap-1 sm:text-base'>
                Add to cart{' '}
                <Icon
                  className='text-lg sm:text-xl'
                  icon={'mdi:cart-variant'}
                />
              </button>
            ) : null}
            <Link to={'/products'}>
              <button className='btn btn-neutral gap-1 sm:text-base'>
                More products{' '}
                <Icon className='text-lg sm:text-xl' icon={'mdi:shopping'} />
              </button>
            </Link>
          </div>

          <span className='font-light first-letter:uppercase'>
            {product.description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
