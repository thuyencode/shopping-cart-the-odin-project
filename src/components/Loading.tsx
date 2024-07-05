import { type ReactPortal } from 'react'
import { createPortal } from 'react-dom'

function Loading(): ReactPortal {
  return createPortal(
    <div className='fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm'>
      <span className='loading loading-spinner size-20' />
    </div>,
    document.body
  )
}

export default Loading
