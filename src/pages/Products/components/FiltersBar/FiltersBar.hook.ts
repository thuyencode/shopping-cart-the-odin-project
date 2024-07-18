import { useContext } from 'react'
import { FiltersContext } from './FiltersBar.context'

export default function useFiltersContext(): FiltersContext {
  const context = useContext(FiltersContext)

  if (context == null) {
    throw new Error('Must be used within FiltersBar')
  }

  return context
}
