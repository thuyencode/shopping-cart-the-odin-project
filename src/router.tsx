import { createBrowserRouter } from 'react-router-dom'
import RouteErrorBoundary from './RouteErrorBoundary'
import PageContainer from './layouts/PageContainer'
import cartPageRoute from './pages/Cart'
import homePageRoute from './pages/Home'
import productPageRoute from './pages/Product'
import productsPageRoute from './pages/Products'

export const router = createBrowserRouter(
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
            { index: true, ...productsPageRoute },
            { path: ':id', ...productPageRoute }
          ]
        }
      ]
    }
  ],
  { basename: import.meta.env.BASE_URL }
)
