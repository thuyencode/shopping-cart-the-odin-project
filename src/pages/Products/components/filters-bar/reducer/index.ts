import { type Category, type SortIn } from '@/lib/types'

export interface FiltersState {
  category: Category
  sortIn: SortIn
  keywords: string
}

type FiltersAction =
  | {
      type: 'SORT_IN_ASC'
    }
  | {
      type: 'SORT_IN_DESC'
    }
  | {
      type: 'SEARCH'
      value: string
    }
  | {
      type: 'SET_CATEGORY'
      value: Category
    }
  | {
      type: 'CLEAR_FILTERS'
    }

export const initialFiltersState: FiltersState = {
  category: '',
  sortIn: '',
  keywords: ''
}

export function filtersReducer(
  state: FiltersState,
  action: FiltersAction
): FiltersState {
  switch (action.type) {
    case 'SORT_IN_ASC':
      return { ...state, sortIn: 'asc' }

    case 'SORT_IN_DESC':
      return { ...state, sortIn: 'desc' }

    case 'SET_CATEGORY':
      return { ...state, category: action.value }

    case 'SEARCH':
      return { ...state, keywords: action.value }

    case 'CLEAR_FILTERS':
      return initialFiltersState

    default:
      return state
  }
}
