import { Icon } from '@iconify/react'
import { useEffect, useState, type FormEvent, type ReactElement } from 'react'
import useFiltersContext from './FiltersBar.hook'

function FiltersBarSearch(): ReactElement {
  const [input, setInput] = useState('')
  const { search, searchForProducts } = useFiltersContext()

  useEffect(() => {
    setInput(search)
  }, [search])

  function handleSubmit(event: FormEvent): void {
    event.preventDefault()

    searchForProducts(input)
  }

  return (
    <form
      className='input input-bordered flex items-center gap-2'
      onSubmit={handleSubmit}
    >
      <input
        className='grow'
        type='text'
        name='search'
        placeholder='Search...'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
      <Icon className='text-xl' icon={'mdi:search'} />
    </form>
  )
}

export default FiltersBarSearch
