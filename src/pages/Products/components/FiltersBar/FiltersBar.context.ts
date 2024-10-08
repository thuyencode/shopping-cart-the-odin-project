import { type Category, type SortIn } from '@/lib/types'
import { createContext } from 'react'

export interface FiltersContext {
  sortInAscendingMode: () => void
  sortInDescendingMode: () => void
  searchForProducts: (search: string) => void
  chooseCategory: (category: Category) => void
  clearFilters: () => void
  sortIn: SortIn
  category: Category
  search: string
  isFiltersChanged: () => boolean
}

export const FiltersContext = createContext<FiltersContext | null>(null)
