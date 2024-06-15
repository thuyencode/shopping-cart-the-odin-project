import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
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
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'cart', element: <ShoppingCartPage /> },
        {
          path: 'products',
          children: [
            {
              index: true,
              loader: async () => {
                return await fetch('https://fakestoreapi.com/products?limit=10')
              },
              element: <ProductsPage />
            },
            {
              path: ':id',
              loader: async ({ params, request: { signal } }) => {
                return await fetch(
                  `https://fakestoreapi.com/products/${params.id}`,
                  { signal }
                )
              },
              element: <ProductPage />
            }
          ]
        }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)
