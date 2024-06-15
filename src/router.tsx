import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import ShoppingCartPage from './pages/ShoppingCartPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cart', element: <ShoppingCartPage /> },
        {
          path: 'products',
          children: [
            { index: true, element: <ProductsPage /> },
            { path: ':id', element: <ProductPage /> }
          ]
        }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)
