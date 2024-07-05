/* eslint-disable react-hooks/exhaustive-deps */
import { type Category, type SortIn } from '@/lib/types'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import {
  useEffect,
  useReducer,
  type PropsWithChildren,
  type ReactElement
} from 'react'
import { useSearchParams } from 'react-router-dom'
import FiltersBarCategory from './FiltersBarCategory'
import FiltersBarClear from './FiltersBarClear'
import FiltersBarSearch from './FiltersBarSearch'
import FiltersBarSortById from './FiltersBarSortById'
import { FiltersContext } from './context'
import { filtersReducer, initialFiltersState } from './reducer'

function FiltersBar({ children }: PropsWithChildren): ReactElement {
  const [state, dispatch] = useReducer(filtersReducer, initialFiltersState)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if ((searchParams.get('sortIn') as SortIn) === 'asc') {
      dispatch({ type: 'SORT_IN_ASC' })
    }

    if ((searchParams.get('sortIn') as SortIn) === 'desc') {
      dispatch({ type: 'SORT_IN_ASC' })
    }

    dispatch({
      type: 'SET_CATEGORY',
      value: (searchParams.get('category') ?? '') as Category
    })

    dispatch({
      type: 'SEARCH',
      value: searchParams.get('search') ?? ''
    })
  }, [])

  function sortInAscendingMode(): void {
    dispatch({ type: 'SORT_IN_ASC' })

    setSearchParams((prev) => {
      prev.set('sortIn', 'asc')

      return prev
    })
  }

  function sortInDescendingMode(): void {
    dispatch({ type: 'SORT_IN_DESC' })

    setSearchParams((prev) => {
      prev.set('sortIn', 'desc')

      return prev
    })
  }

  function searchForProducts(search: string): void {
    dispatch({ type: 'SEARCH', value: search })

    setSearchParams((prev) => {
      if (isEmpty(search)) {
        prev.delete('search')
      } else {
        prev.set('search', search)
      }

      return prev
    })
  }

  function chooseCategory(category: Category): void {
    dispatch({ type: 'SET_CATEGORY', value: category })

    setSearchParams((prev) => {
      prev.set('category', category)

      return prev
    })
  }

  function clearFilters(): void {
    dispatch({ type: 'CLEAR_FILTERS' })

    setSearchParams(new URLSearchParams(), { replace: true })
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
          search: state.search,
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
