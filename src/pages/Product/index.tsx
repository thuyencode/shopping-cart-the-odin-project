/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getProduct } from '@/lib/api'
import { type Product } from '@/lib/types'
import isEmpty from 'lodash/isEmpty'
import { redirect, type Params } from 'react-router-dom'
import ProductPage from './ProductPage'

interface ProductPageLoader {
  params: Params<string>
  request: { signal: AbortSignal }
}

async function loader({
  params,
  request: { signal }
}: ProductPageLoader): Promise<Product | Response> {
  const data = await getProduct({ id: params.id!, signal })

  if (isEmpty(data)) {
    return redirect('/404')
  }

  return data
}

const productPageRoute = {
  loader,
  element: <ProductPage />
}

export default productPageRoute
