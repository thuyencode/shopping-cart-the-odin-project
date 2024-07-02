import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'

function Footer(): ReactElement {
  return (
    <footer className='footer footer-center justify-center gap-1 bg-neutral p-2 text-neutral-content sm:flex sm:p-4'>
      <aside className='footer-title m-0 inline-flex items-center gap-1 max-md:text-xs'>
        <a
          className='link-hover link'
          href='https://github.com/thuyencode/shopping-cart-the-odin-project'
          target='_blank'
          rel='noreferrer'
        >
          Thuyen Code
        </a>
        <Icon className='mb-0.5 text-lg md:text-xl' icon={'mdi:copyright'} />
      </aside>
      <aside className='footer-title m-0 block max-md:text-xs'>
        <a
          className='link-hover link link-info'
          href={import.meta.env.VITE_API_URL}
          target='_blank'
          rel='noreferrer'
        >
          Powered by Fake Store API
        </a>
      </aside>
    </footer>
  )
}

export default Footer
