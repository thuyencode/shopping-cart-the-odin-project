import { type ReactElement } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout(): ReactElement {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
