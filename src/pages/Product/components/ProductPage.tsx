import Loading from '@/components/Loading'
import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

function ProductPage(): ReactElement {
  const product = useLoaderData() as Product
  const { state } = useNavigation()

  return (
    <>
      {state === 'loading' && <Loading />}
      <div className='container flex-1'>
        <h2>This product is named: &quot;{product.title}&quot;</h2>
      </div>
    </>
  )
}

export default ProductPage
