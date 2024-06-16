import { type ReactElement } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function PageContainer(): ReactElement {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className='container flex-1'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default PageContainer
