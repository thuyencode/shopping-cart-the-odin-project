import { type Category } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'
import useFiltersContext from './FiltersBar.hook'

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
    <details className='dropdown' role='listbox'>
      <summary className='btn capitalize' tabIndex={0}>
        <Icon className='text-lg' icon={'mdi:chevron-down'} />
        {changeDropdownToggleLabel()}
      </summary>

      <ul
        className='menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-300'
        role='menu'
        tabIndex={0}
      >
        {categories.map((category) => (
          <li
            role='menuitem'
            onClick={() => {
              chooseCategory(category)
            }}
            key={category}
          >
            <span className='capitalize'>{category}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default FiltersBarCategory
