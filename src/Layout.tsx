import { type ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout(): ReactElement {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
