import { type ReactElement } from 'react'
import FiltersBar from './components/FiltersBar'
import ProductsList from './components/ProductsList'

function ProductsPage(): ReactElement {
  return (
    <div className='hero-content mb-20 size-full flex-col justify-start gap-10 pt-24 sm:px-10'>
      <FiltersBar>
        <FiltersBar.Search />
        <FiltersBar.SortById />
        <FiltersBar.Category />
        <FiltersBar.Clear />
      </FiltersBar>

      <ProductsList />
    </div>
  )
}

export default ProductsPage
