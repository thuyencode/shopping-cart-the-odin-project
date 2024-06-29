import { type Category } from '@/lib/types'
import { useReducer, type PropsWithChildren, type ReactElement } from 'react'
import FiltersBarCategory from './FiltersBarCategory'
import FiltersBarSearch from './FiltersBarSearch'
import FiltersBarSortById from './FiltersBarSortById'
import { FiltersContext } from './context'
import { filtersReducer, initialFiltersState } from './reducer'

function FiltersBar({ children }: PropsWithChildren): ReactElement {
  const [state, dispatch] = useReducer(filtersReducer, initialFiltersState)

  function sortInAscendingMode(): void {
    dispatch({ type: 'SORT_IN_ASC' })
  }

  function sortInDescendingMode(): void {
    dispatch({ type: 'SORT_IN_DESC' })
  }

  function searchForProducts(keywords: string): void {
    dispatch({ type: 'SEARCH', value: keywords })
  }

  function chooseCategory(category: Category): void {
    dispatch({ type: 'SET_CATEGORY', value: category })
  }

  return (
    <div className='sticky top-28 flex flex-col gap-2 self-start'>
      <FiltersContext.Provider
        value={{
          sortInAscendingMode,
          sortInDescendingMode,
          searchForProducts,
          chooseCategory,
          sortIn: state.sortIn,
          category: state.category
        }}
      >
        {children}
      </FiltersContext.Provider>
    </div>
  )
}

FiltersBar.SortById = FiltersBarSortById
FiltersBar.Category = FiltersBarCategory
FiltersBar.Search = FiltersBarSearch

export default FiltersBar
