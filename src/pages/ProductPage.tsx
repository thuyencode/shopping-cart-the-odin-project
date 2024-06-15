import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

function ProductPage(): ReactElement {
  const product = useLoaderData() as Product
  const { state } = useNavigation()

  if (state === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h2>This product is named: &quot;{product.title}&quot;</h2>
    </>
  )
}

export default ProductPage
