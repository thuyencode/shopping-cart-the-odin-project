import { Icon } from '@iconify/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import isEmpty from 'lodash/isEmpty'
import { type ReactElement } from 'react'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import { productDetailQuery } from '.'
import AddToCart from './components/AddToCart'
import Rating from './components/Rating'

function ProductPage(): ReactElement {
  const { productId } = useLoaderData() as { productId: string }
  const { data: product, isLoading } = useSuspenseQuery(
    productDetailQuery(productId)
  )

  if (!isLoading && isEmpty(product)) {
    return <Navigate to={'/404'} />
  }

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
            <Link
              className='link-hover link text-sm font-light sm:text-base'
              to={`/products?category=${product.category}`}
            >
              {product.category}
            </Link>
          </div>

          <div className='flex items-center justify-between gap-2 md:flex-col md:items-start'>
            <h3>${product.price}</h3>
            <Rating rating={product.rating} />
          </div>

          <div className='card-actions max-md:justify-between'>
            <AddToCart />

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
