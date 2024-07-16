import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import './index.css'
import {
  LazyCartPage,
  LazyHomePage,
  LazyProductPage,
  NotFoundRoutePage,
  PageContainer,
  productLoader
} from './pages'
import { LazyProductsPage, productsLoader } from './pages/Products'
import RouteErrorBoundary from './RouteErrorBoundary'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageContainer />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <LazyHomePage /> },
      { path: 'cart', element: <LazyCartPage /> },
      {
        path: 'products',
        children: [
          {
            index: true,
            loader: productsLoader(queryClient),
            element: <LazyProductsPage />
          },
          {
            path: ':id',
            loader: productLoader(queryClient),
            element: <LazyProductPage />
          }
        ]
      },
      { path: '/404', element: <NotFoundRoutePage /> },
      { path: '*', element: <Navigate to={'/404'} /> }
    ]
  }
])

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
