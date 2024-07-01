import { type Category, type SortIn } from '@/lib/types'
import { createContext } from 'react'

export interface FiltersContextState {
  sortInAscendingMode: () => void
  sortInDescendingMode: () => void
  searchForProducts: (keywords: string) => void
  chooseCategory: (category: Category) => void
  clearFilters: () => void
  sortIn: SortIn
  category: Category
  keywords: string
  isFiltersChanged: () => boolean
}

export const FiltersContext = createContext<FiltersContextState | null>(null)
