import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button } from 'react-daisyui'
import useFiltersContext from './hook/useFiltersContext'

function FiltersBarClear(): ReactElement {
  const { clearFilters, isFiltersChanged: isFiltersChange } =
    useFiltersContext()

  return (
    <>
      {isFiltersChange() ? (
        <Button
          className='justify-start'
          color='primary'
          onClick={clearFilters}
        >
          <Icon className='text-lg' icon={'mdi:close'} />
          Clear filters
        </Button>
      ) : null}
    </>
  )
}

export default FiltersBarClear
