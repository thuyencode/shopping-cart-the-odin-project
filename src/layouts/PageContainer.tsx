import Loading from '@/components/Loading'
import { type ReactElement } from 'react'
import { Hero } from 'react-daisyui'
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function PageContainer(): ReactElement {
  const { state } = useNavigation()

  return (
    <>
      {state === 'loading' && <Loading />}
      <ScrollRestoration />

      <Navbar />

      <Hero className='flex-1'>
        <Outlet />
      </Hero>

      <Footer />
    </>
  )
}

export default PageContainer
