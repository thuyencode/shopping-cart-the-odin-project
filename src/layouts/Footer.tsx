import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Footer as DaisyFooter, Link } from 'react-daisyui'

function Footer(): ReactElement {
  return (
    <DaisyFooter className='place-items-center justify-center gap-1 bg-neutral p-2 text-center text-neutral-content sm:flex sm:p-4'>
      <DaisyFooter.Title className='m-0 inline-flex items-center gap-1 max-md:text-xs'>
        <Link
          href='https://github.com/thuyencode/shopping-cart-the-odin-project'
          target='_blank'
          rel='noreferrer'
        >
          Thuyen Code
        </Link>
        <Icon className='mb-0.5 text-lg md:text-xl' icon={'mdi:copyright'} />
      </DaisyFooter.Title>
      <DaisyFooter.Title className='m-0 block max-md:text-xs'>
        <Link
          href={import.meta.env.VITE_API_URL}
          target='_blank'
          rel='noreferrer'
          color='info'
        >
          Powered by Fake Store API
        </Link>
      </DaisyFooter.Title>
    </DaisyFooter>
  )
}

export default Footer
