import { type Category, type ProductsFilterParams } from '@/lib/types'

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

export const initialFiltersState: ProductsFilterParams = {
  category: '',
  sortIn: '',
  search: ''
}

export function filtersReducer(
  state: ProductsFilterParams,
  action: FiltersAction
): ProductsFilterParams {
  switch (action.type) {
    case 'SORT_IN_ASC':
      return { ...state, sortIn: 'asc' }

    case 'SORT_IN_DESC':
      return { ...state, sortIn: 'desc' }

    case 'SET_CATEGORY':
      return { ...state, category: action.value }

    case 'SEARCH':
      return { ...state, search: action.value }

    case 'CLEAR_FILTERS':
      return initialFiltersState

    default:
      return state
  }
}
