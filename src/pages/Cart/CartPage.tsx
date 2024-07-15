import { type ReactElement } from 'react'
import CartSummaryCard from './components/CartSummaryCard'
import ProductsInCart from './components/ProductsInCart'

function CartPage(): ReactElement {
  return (
    <div className='hero-content mb-20 size-full gap-16 px-10 pt-24 max-lg:flex-col sm:gap-20 lg:items-start lg:gap-10'>
      <ProductsInCart />
      <CartSummaryCard />
    </div>
  )
}

export default CartPage
