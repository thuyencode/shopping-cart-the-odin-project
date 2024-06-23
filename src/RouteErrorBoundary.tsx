import { type ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

function RouteErrorBoundary(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  return <h3>{error}</h3>
}

export default RouteErrorBoundary
