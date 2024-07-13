import { type GetProductsArgs } from '@/lib/api'
import { productsQuery } from '@/lib/query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsList(): ReactElement {
  const { filters } = useLoaderData() as {
    filters: Omit<GetProductsArgs, 'signal'>
  }
  const { data: products } = useSuspenseQuery(productsQuery(filters))

  return (
    <div className='grid w-full grid-cols-ram place-items-center gap-10'>
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
  )
}

export default ProductsList
