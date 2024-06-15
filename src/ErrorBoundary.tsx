import { type ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorBoundary(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  console.error(error)

  return (
    <h3>
      {error.status} - {error.data}
    </h3>
  )
}

export default ErrorBoundary
