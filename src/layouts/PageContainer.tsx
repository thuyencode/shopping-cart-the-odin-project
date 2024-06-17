import Loading from '@/components/Loading'
import { type ReactElement } from 'react'
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
      <Outlet />
      <Footer />
    </>
  )
}

export default PageContainer
