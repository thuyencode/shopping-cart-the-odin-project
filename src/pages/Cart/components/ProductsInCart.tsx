import useCart from '@/hooks/useCart'
import { Fragment, type ReactElement } from 'react'
import ProductInCartCard from './ProductInCartCard'

function ProductsInCart(): ReactElement {
  const { productsInCart } = useCart()

  return (
    <div className='flex flex-col gap-5'>
      {productsInCart.map((product, index) => (
        <Fragment key={`cart-product-${index}`}>
          <ProductInCartCard product={product} />

          {index < productsInCart.length - 1 ? (
            <div className='divider' />
          ) : null}
        </Fragment>
      ))}
    </div>
  )
}

export default ProductsInCart
