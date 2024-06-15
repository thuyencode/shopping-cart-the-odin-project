import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Layout from './Layout'
import ShoppingCartPage from './pages/cart'
import HomePage from './pages/home'
import ProductsPage from './pages/products'
import ProductPage from './pages/products/id'

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
              loader: async ({ request: { signal } }) => {
                return await fetch(
                  'https://fakestoreapi.com/products?limit=10',
                  { signal }
                )
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
