import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsList(): ReactElement {
  const { products } = useLoaderData() as { products: Product[] }

  return (
    <div className='grid-cols-ram grid w-full place-items-center gap-10'>
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
