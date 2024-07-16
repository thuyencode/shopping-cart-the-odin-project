import useCart from '@/hooks/useCart'
import { Fragment, type ReactElement } from 'react'
import ProductInCartCard from './ProductInCartCard'

function ProductsInCart(): ReactElement {
  const { productsInCart, removeFromCart } = useCart()

  return (
    <div className='flex flex-col gap-5'>
      {productsInCart.map((product, index) => (
        <Fragment key={`${product.cartUUID}-${product.id}`}>
          <ProductInCartCard
            product={product}
            onClick={() => {
              removeFromCart({
                productId: product.id,
                cartUUID: product.cartUUID
              })
            }}
          />

          {index < productsInCart.length - 1 ? (
            <div className='divider max-sm:my-1' />
          ) : null}
        </Fragment>
      ))}
    </div>
  )
}

export default ProductsInCart
