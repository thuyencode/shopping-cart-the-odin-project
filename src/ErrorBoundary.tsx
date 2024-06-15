import { type ReactElement } from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorBoundary(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  console.error(error)

  return (
    <p>
      {error.status} - {error.data}
    </p>
  )
}

export default ErrorBoundary
