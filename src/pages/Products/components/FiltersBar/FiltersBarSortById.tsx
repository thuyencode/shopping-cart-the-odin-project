import { withClose } from '@/components/hoc'
import { Icon } from '@iconify/react'
import { forwardRef, type ReactElement } from 'react'
import useFiltersContext from './FiltersBar.hook'

const FiltersBarSortById: () => ReactElement = withClose(
  forwardRef<HTMLDetailsElement>(function (_, ref) {
    const { sortInAscendingMode, sortInDescendingMode, sortIn } =
      useFiltersContext()

    function changeDropdownToggleLabel(): ReactElement {
      switch (sortIn) {
        case 'asc':
          return <Ascending />
        case 'desc':
          return <Descending />
        default:
          return <Default />
      }
    }

    return (
      <details className='dropdown' role='listbox' ref={ref}>
        <summary className='btn' tabIndex={0}>
          {changeDropdownToggleLabel()}
        </summary>

        <ul
          className='menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-300'
          role='menu'
          tabIndex={0}
        >
          <li role='menuitem' onClick={sortInAscendingMode}>
            <Ascending />
          </li>
          <li role='menuitem' onClick={sortInDescendingMode}>
            <Descending />
          </li>
        </ul>
      </details>
    )
  })
)

function Default(): ReactElement {
  return (
    <span className='inline-flex items-center gap-2'>
      <Icon className='text-lg' icon={'mdi:chevron-down'} />
      Sort By ID
    </span>
  )
}

function Ascending(): ReactElement {
  return (
    <span className='inline-flex items-center gap-2'>
      <Icon className='text-lg' icon={'mdi:sort-numeric-ascending'} />
      Ascending
    </span>
  )
}

function Descending(): ReactElement {
  return (
    <span className='inline-flex items-center gap-2'>
      <Icon className='text-lg' icon={'mdi:sort-numeric-descending'} />
      Descending
    </span>
  )
}

export default FiltersBarSortById
