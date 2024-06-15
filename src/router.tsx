import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Layout from './Layout'
import ShoppingCartPage from './pages/cart'
import HomePage from './pages/home'
import productsPageRoute from './pages/products'
import productPageRoute from './pages/products/id'
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cart', element: <ShoppingCartPage /> },
        {
          path: 'products',
          children: [
            { index: true, ...productsPageRoute },
            { path: ':id', ...productPageRoute }
          ]
        }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)
