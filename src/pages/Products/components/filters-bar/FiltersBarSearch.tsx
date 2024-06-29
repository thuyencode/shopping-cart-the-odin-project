import { Icon } from '@iconify/react/dist/iconify.js'
import { type ReactElement } from 'react'

function FiltersBarSearch(): ReactElement {
  return (
    <label className='input input-bordered flex items-center gap-2'>
      <input
        className='grow'
        type='text'
        name='search'
        placeholder='Search...'
      />
      <Icon className='text-xl' icon={'mdi:search'} />
    </label>
  )
}

export default FiltersBarSearch
