/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from '@iconify/react/dist/iconify.js'
import { useDeferredValue, useEffect, useState, type ReactElement } from 'react'
import useFiltersContext from './hook/useFiltersContext'

function FiltersBarSearch(): ReactElement {
  const [input, setInput] = useState('')
  const keywords = useDeferredValue(input)
  const { searchForProducts, isFiltersChanged } = useFiltersContext()

  useEffect(() => {
    searchForProducts(keywords)
  }, [keywords])

  useEffect(() => {
    if (!isFiltersChanged()) setInput('')
  }, [isFiltersChanged])

  return (
    <label className='input input-bordered flex items-center gap-2'>
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
    </label>
  )
}

export default FiltersBarSearch
