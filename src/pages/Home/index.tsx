import { lazy, type ReactElement, Suspense } from 'react'

const HomePage = lazy(async () => await import('./HomePage'))

export const LazyHomePage = (): ReactElement => (
  <Suspense>
    <HomePage />
  </Suspense>
)
