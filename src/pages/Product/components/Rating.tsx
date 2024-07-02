import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react'
import { useId, type ReactElement } from 'react'

function Rating({
  rating: { rate, count }
}: Pick<Product, 'rating'>): ReactElement {
  return (
    <div className='flex items-center gap-1'>
      <Stars rate={rate} />

      <span className='flex-none text-sm font-medium sm:text-base'>{rate}</span>

      <Icon className='mb-0.5' icon={'radix-icons:dot-filled'} />

      <span className='text-sm font-light sm:text-base'>
        {count} {count > 1 ? 'reviews' : 'review'}
      </span>
    </div>
  )
}

function Stars({ rate }: { rate: number }): ReactElement {
  const id = useId()
  const value = Math.round(rate * 2)

  function maskStarHalf(n: number): 'mask-half-1' | 'mask-half-2' {
    return n % 2 === 0 ? 'mask-half-1' : 'mask-half-2'
  }

  return (
    <div className='rating rating-half rating-sm mb-0.5'>
      {Array.from({ length: 10 }).map((_, index) => (
        <input
          className={`mask ${maskStarHalf(index)} mask-star-2 bg-green-500`}
          type='radio'
          name='rating-10'
          defaultChecked={value === index + 1}
          readOnly
          key={`${id}${index}`}
        />
      ))}
    </div>
  )
}

export default Rating
