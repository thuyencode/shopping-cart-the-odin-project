import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { Hero } from 'react-daisyui'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsPage(): ReactElement {
  const products = useLoaderData() as Product[]

  return (
    <Hero.Content className='mb-20 mt-5 md:mt-28'>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </Hero.Content>
  )
}

export default ProductsPage
