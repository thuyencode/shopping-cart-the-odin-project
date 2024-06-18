import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { Hero } from 'react-daisyui'
import { useLoaderData } from 'react-router-dom'

function ProductPage(): ReactElement {
  const product = useLoaderData() as Product

  return (
    <Hero.Content className='mb-20 mt-28'>
      <h2>This product is named: &quot;{product.title}&quot;</h2>
    </Hero.Content>
  )
}

export default ProductPage
