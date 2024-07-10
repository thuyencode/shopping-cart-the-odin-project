import { lazy, Suspense } from 'react'

const HomePage = lazy(async () => await import('./HomePage'))

const homePageRoute = {
  element: (
    <Suspense>
      <HomePage />
    </Suspense>
  )
}

export default homePageRoute
