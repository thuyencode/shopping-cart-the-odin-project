import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import RouteErrorBoundary from './RouteErrorBoundary'
import PageContainer from './layouts/PageContainer'
import NotFoundRoutePage from './pages/404'
import { LazyCartPage } from './pages/Cart'
import { LazyHomePage } from './pages/Home'
import { LazyProductPage, productLoader } from './pages/Product'
import { LazyProductsPage, productsLoader } from './pages/Products'

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

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition='bottom-right' />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
