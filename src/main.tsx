import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import './index.css'
import {
  cartPageRoute,
  homePageRoute,
  NotFoundRoutePage,
  PageContainer
} from './pages'
import { productLoader, ProductPage } from './pages/Product'
import { productsLoader, ProductsPage } from './pages/Products'
import RouteErrorBoundary from './RouteErrorBoundary'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30
    }
  }
})

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageContainer />,
      errorElement: <RouteErrorBoundary />,
      children: [
        { index: true, ...homePageRoute },
        { path: 'cart', ...cartPageRoute },
        {
          path: 'products',
          children: [
            {
              index: true,
              loader: productsLoader(queryClient),
              element: (
                <Suspense>
                  <ProductsPage />
                </Suspense>
              )
            },
            {
              path: ':id',
              loader: productLoader(queryClient),
              element: (
                <Suspense>
                  <ProductPage />
                </Suspense>
              )
            }
          ]
        },
        { path: '/404', element: <NotFoundRoutePage /> },
        { path: '*', element: <Navigate to={'/404'} /> }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition='bottom-right' />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
