import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Footer as DaisyFooter, Link } from 'react-daisyui'

function Footer(): ReactElement {
  return (
    <DaisyFooter className='bg-neutral text-neutral-content flex justify-center p-4'>
      <DaisyFooter.Title className='m-0'>
        <Link
          href='https://github.com/thuyencode/shopping-cart-the-odin-project'
          target='_blank'
          rel='noreferrer'
        >
          Thuyen Code
        </Link>
      </DaisyFooter.Title>
      <Icon className='text-xl' icon={'mdi:copyright'} />
      <DaisyFooter.Title className='m-0'>
        <Link
          href='https://fakestoreapi.com'
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
