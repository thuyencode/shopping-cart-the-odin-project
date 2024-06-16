import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import PageContainer from './layouts/PageContainer'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import productPageRoute from './pages/Product'
import productsPageRoute from './pages/Products'
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageContainer />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cart', element: <CartPage /> },
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
