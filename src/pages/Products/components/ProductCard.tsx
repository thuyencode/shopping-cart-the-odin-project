import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

function ProductCard(
  props: Pick<Product, 'image' | 'title' | 'price' | 'id'>
): ReactElement {
  return (
    <Link to={props.id.toString()}>
      <div
        className='card card-bordered tooltip card-compact tooltip-info max-w-64 bg-base-300 shadow-lg'
        role='tooltip'
        aria-label='Card'
        data-tip={props.title}
      >
        <figure>
          <img
            className='aspect-square object-cover object-top duration-300 hover:scale-105'
            src={props.image}
          />
        </figure>

        <div className='card-body gap-5'>
          <div className='card-title justify-between text-base font-normal capitalize'>
            <span className='truncate font-medium'>{props.title}</span>
            <span>{props.price}$</span>
          </div>

          <div className='card-actions'>
            <button className='btn btn-neutral btn-block'>
              Check this product
              <Icon className='text-xl' icon={'mdi:shopping'} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
