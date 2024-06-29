import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button, Dropdown } from 'react-daisyui'
import useFiltersContext from './hook/useFiltersContext'

function FiltersBarSortById(): ReactElement {
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
    <Dropdown className='w-full'>
      <Dropdown.Toggle button={false}>
        <Button className='w-full justify-start'>
          {changeDropdownToggleLabel()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className='z-[1] mt-2 w-full bg-base-300'>
        <Dropdown.Item className='items-center' onClick={sortInAscendingMode}>
          <Ascending />
        </Dropdown.Item>
        <Dropdown.Item className='items-center' onClick={sortInDescendingMode}>
          <Descending />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

function Default(): ReactElement {
  return (
    <>
      <Icon className='text-lg' icon={'mdi:chevron-down'} />
      Sort By ID
    </>
  )
}

function Ascending(): ReactElement {
  return (
    <>
      <Icon className='text-lg' icon={'mdi:sort-numeric-ascending'} />
      Ascending
    </>
  )
}

function Descending(): ReactElement {
  return (
    <>
      <Icon className='text-lg' icon={'mdi:sort-numeric-descending'} />
      Descending
    </>
  )
}

export default FiltersBarSortById
