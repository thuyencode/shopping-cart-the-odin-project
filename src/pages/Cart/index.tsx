import { lazy, type ReactElement, Suspense } from 'react'

const CartPage = lazy(async () => await import('./CartPage'))

export const LazyCartPage = (): ReactElement => (
  <Suspense>
    <CartPage />
  </Suspense>
)
