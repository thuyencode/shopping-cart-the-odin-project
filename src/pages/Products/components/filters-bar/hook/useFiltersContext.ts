import { useContext } from 'react'
import { FiltersContext, type FiltersContextState } from '..'

export default function useFiltersContext(): FiltersContextState {
  const context = useContext(FiltersContext)

  if (context == null) {
    throw new Error('Must be used within FiltersContextProvider')
  }

  return context
}
