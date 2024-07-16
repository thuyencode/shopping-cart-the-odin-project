import { type ProductInCart } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function ProductInCartCard({
  product,
  onClick
}: {
  product: ProductInCart
  onClick: () => void
}): ReactElement {
  return (
    <div className='card sm:card-side'>
      <figure className='min-w-52 !rounded-md'>
        <img
          className='aspect-square h-52 w-52 object-cover object-top max-sm:rounded-md'
          src={product.image}
          alt={product.title}
        />
      </figure>

      <div className='card-body justify-between pb-0 pt-4 max-sm:px-0 sm:py-0'>
        <div className='card-title flex-col items-start capitalize'>
          <h4>{product.title}</h4>
          <span className='text-sm font-light sm:text-base'>
            {product.category}
          </span>
        </div>

        <div>
          <p className='text-base'>
            <span className='opacity-80'>Quantity:</span>{' '}
            <span className='font-medium'>{product.quantity}</span>
          </p>
          <p className='text-base'>
            <span className='opacity-80'>Time added:</span>{' '}
            <span className='font-medium'>{product.date.toLocaleString()}</span>
          </p>
        </div>

        <div className='card-actions justify-end max-sm:mt-2.5 max-sm:gap-1'>
          <Link to={`/products/${product.id}`}>
            <button className='btn btn-ghost h-10 min-h-10 gap-1'>
              Check this product
              <Icon className='text-xl' icon={'mdi:shopping'} />
            </button>
          </Link>
          <button
            className='btn btn-outline btn-error h-10 min-h-10 gap-1 text-error'
            onClick={onClick}
          >
            Remove
            <Icon className='text-xl' icon={'mdi:trash-can-outline'} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInCartCard
