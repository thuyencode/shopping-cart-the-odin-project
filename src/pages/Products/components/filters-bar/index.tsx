import { type Category } from '@/lib/types'
import isEqual from 'lodash/isEqual'
import { useReducer, type PropsWithChildren, type ReactElement } from 'react'
import FiltersBarCategory from './FiltersBarCategory'
import FiltersBarClear from './FiltersBarClear'
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

  function clearFilters(): void {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  function isFiltersChanged(): boolean {
    return !isEqual(state, initialFiltersState)
  }

  return (
    <div className='sticky top-28 flex flex-col gap-2 self-start'>
      <FiltersContext.Provider
        value={{
          sortInAscendingMode,
          sortInDescendingMode,
          searchForProducts,
          chooseCategory,
          clearFilters,
          sortIn: state.sortIn,
          category: state.category,
          keywords: state.keywords,
          isFiltersChanged
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
FiltersBar.Clear = FiltersBarClear

export default FiltersBar
