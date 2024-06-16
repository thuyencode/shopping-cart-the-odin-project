import { type ReactElement } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Layout(): ReactElement {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
