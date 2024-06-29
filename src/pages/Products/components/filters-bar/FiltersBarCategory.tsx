import { type Category } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button, Dropdown } from 'react-daisyui'
import { useLoaderData } from 'react-router-dom'
import useFiltersContext from './hook/useFiltersContext'

function FiltersBarCategory(): ReactElement {
  const { categories } = useLoaderData() as { categories: Category[] }
  const { chooseCategory, category } = useFiltersContext()

  function changeDropdownToggleLabel(): string | Category {
    switch (category) {
      case '':
        return 'Category'

      default:
        return category
    }
  }

  return (
    <Dropdown className='w-full'>
      <Dropdown.Toggle button={false}>
        <Button className='w-full justify-start capitalize'>
          <Icon className='text-lg' icon={'mdi:chevron-down'} />
          {changeDropdownToggleLabel()}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu className='z-[1] mt-2 w-full bg-base-300'>
        {categories.map((category) => (
          <Dropdown.Item
            className='items-center capitalize'
            onClick={() => {
              chooseCategory(category)
            }}
            key={category}
          >
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default FiltersBarCategory
