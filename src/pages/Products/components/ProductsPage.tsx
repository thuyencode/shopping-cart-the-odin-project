import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsPage(): ReactElement {
  const products = useLoaderData() as Product[]

  return (
    <>
      <div className='container my-20 flex-1'>
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
      </div>
    </>
  )
}

export default ProductsPage
