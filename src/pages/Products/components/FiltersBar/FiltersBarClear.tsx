import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import useFiltersContext from './FiltersBar.hooks'

function FiltersBarClear(): ReactElement {
  const { clearFilters, isFiltersChanged } = useFiltersContext()

  return (
    <>
      {isFiltersChanged() ? (
        <button className='btn btn-primary' onClick={clearFilters}>
          <Icon className='text-lg' icon={'mdi:close'} />
          Clear filters
        </button>
      ) : null}
    </>
  )
}

export default FiltersBarClear
