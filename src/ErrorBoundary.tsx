// Thanks to https://stackoverflow.com/a/78132377

import { Icon } from '@iconify/react'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className='hero flex-1'>
          <div className='hero-content flex-col gap-7'>
            <h1 className='inline-flex items-center gap-2 text-error'>
              Something went wrong{' '}
              <Icon className='text-4xl' icon={'bxs:error'} />
            </h1>
            <a href={'/'}>
              <button className='btn btn-info gap-1 lg:btn-lg'>
                <Icon
                  className='text-lg lg:text-xl'
                  icon={'mdi:arrow-left-bold'}
                />
                Go back to home page
              </button>
            </a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
