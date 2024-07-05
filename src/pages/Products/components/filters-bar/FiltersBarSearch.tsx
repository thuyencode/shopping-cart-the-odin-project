/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from '@iconify/react'
import { useRef, type FormEvent, type ReactElement } from 'react'
import useFiltersContext from './hook/useFiltersContext'

function FiltersBarSearch(): ReactElement {
  const ref = useRef<HTMLInputElement>(null)
  const { search, searchForProducts } = useFiltersContext()

  function handleSubmit(event: FormEvent): void {
    event.preventDefault()

    if (ref.current !== null) {
      searchForProducts(ref.current.value)
    }
  }

  return (
    <form
      className='input input-bordered flex items-center gap-2'
      onSubmit={handleSubmit}
    >
      <input
        className='grow'
        ref={ref}
        type='text'
        name='search'
        placeholder='Search...'
        defaultValue={search}
      />
      <Icon className='text-xl' icon={'mdi:search'} />
    </form>
  )
}

export default FiltersBarSearch
