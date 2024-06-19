import { type ReactPortal } from 'react'
import { Loading as DaisyLoading } from 'react-daisyui'
import { createPortal } from 'react-dom'

function Loading(): ReactPortal {
  return createPortal(
    <div className='sticky inset-0 z-10 flex h-screen items-center justify-center backdrop-blur-sm'>
      <DaisyLoading className='size-20' color='neutral' />
    </div>,
    document.body
  )
}

export default Loading
