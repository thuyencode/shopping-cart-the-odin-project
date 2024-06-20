import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Footer as DaisyFooter, Link } from 'react-daisyui'

function Footer(): ReactElement {
  return (
    <DaisyFooter className='block justify-center bg-neutral p-2 text-center text-neutral-content md:flex md:p-4'>
      <DaisyFooter.Title className='m-0 inline-block max-md:text-xs'>
        <Link
          href='https://github.com/thuyencode/shopping-cart-the-odin-project'
          target='_blank'
          rel='noreferrer'
        >
          Thuyen Code
        </Link>
      </DaisyFooter.Title>
      <Icon
        className='inline-block text-base max-md:mb-[1px] max-md:ml-1 md:text-xl'
        icon={'mdi:copyright'}
      />
      <DaisyFooter.Title className='m-0 block max-md:mt-1 max-md:text-xs'>
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
