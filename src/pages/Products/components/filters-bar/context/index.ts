import { type Category, type SortIn } from '@/lib/types'
import { createContext } from 'react'

export interface FiltersContextState {
  sortInAscendingMode: () => void
  sortInDescendingMode: () => void
  searchForProducts: (keywords: string) => void
  chooseCategory: (category: Category) => void
  sortIn: SortIn
  category: Category
}

export const FiltersContext = createContext<FiltersContextState | null>(null)
