import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import { type ReactElement } from 'react'
import { Rating as DaisyRating } from 'react-daisyui'

function Rating({
  rating: { rate, count }
}: Pick<Product, 'rating'>): ReactElement {
  return (
    <div className='flex items-center gap-1'>
      <DaisyRating
        className='mb-0.5'
        value={Math.floor(rate * 2)}
        size='sm'
        half
      >
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-1 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-2 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-1 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-2 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-1 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-2 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-1 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-2 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-1 mask-star-2 bg-green-500'
        />
        <DaisyRating.Item
          name='rating-10'
          className='mask mask-half-2 mask-star-2 bg-green-500'
        />
      </DaisyRating>
      <span className='flex-none text-sm font-medium sm:text-base'>{rate}</span>

      <Icon className='mb-0.5' icon={'radix-icons:dot-filled'} />

      <span className='text-sm font-light sm:text-base'>
        {count} {count > 1 ? 'reviews' : 'review'}
      </span>
    </div>
  )
}

export default Rating
