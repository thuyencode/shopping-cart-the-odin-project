import { lazy, Suspense } from 'react'

const CartPage = lazy(async () => await import('./CartPage'))

const cartPageRoute = {
  element: (
    <Suspense>
      <CartPage />
    </Suspense>
  )
}

export default cartPageRoute
