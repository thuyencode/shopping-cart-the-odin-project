import { type ReactElement } from 'react'
import { Hero } from 'react-daisyui'
import ProductsList from './ProductsList'
import FiltersBar from './filters-bar'

function ProductsPage(): ReactElement {
  return (
    <Hero.Content className='mb-20 mt-5 max-w-[100rem] max-md:flex-col md:mt-10'>
      <FiltersBar>
        <FiltersBar.Search />
        <FiltersBar.SortById />
        <FiltersBar.Category />
        <FiltersBar.Clear />
      </FiltersBar>

      <ProductsList />
    </Hero.Content>
  )
}

export default ProductsPage
