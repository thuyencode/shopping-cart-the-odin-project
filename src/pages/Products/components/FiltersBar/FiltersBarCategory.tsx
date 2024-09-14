import { withClose } from '@/components/hoc'
import { categoriesQuery } from '@/lib/query'
import { type Category } from '@/lib/types'
import { Icon } from '@iconify/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { forwardRef, type ReactElement } from 'react'
import useFiltersContext from './FiltersBar.hook'

const FiltersBarCategory: () => ReactElement = withClose(
  forwardRef<HTMLDetailsElement>(function (_, ref) {
    const { data: categories } = useSuspenseQuery(categoriesQuery())
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
      <details className='dropdown' role='listbox' ref={ref}>
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
  })
)

export default FiltersBarCategory
