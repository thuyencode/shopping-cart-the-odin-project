import { type Product } from '@/lib/types'
import { axios } from '@/lib/utils'
import { type ReactElement } from 'react'
import { useLoaderData, useNavigation, type Params } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
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

interface ProductPageLoader {
  params: Params<string>
  request: { signal: AbortSignal }
}

async function loader({
  params,
  request: { signal }
}: ProductPageLoader): Promise<Product> {
  return await axios
    .get(`https://fakestoreapi.com/products/${params.id}`, { signal })
    .then((res) => res.data)
}

const productPageRoute = {
  loader,
  element: <ProductPage />
}

export default productPageRoute
