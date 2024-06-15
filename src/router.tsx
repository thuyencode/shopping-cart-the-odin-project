import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ShoppingCartPage from './pages/ShoppingCartPage'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/products', element: <ProductsPage /> },
        { path: '/cart', element: <ShoppingCartPage /> }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)
