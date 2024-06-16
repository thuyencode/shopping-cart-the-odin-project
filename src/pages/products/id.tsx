import ProductPage from '@/components/ProductPage'
import { type Product } from '@/lib/types'
import { axios } from '@/lib/utils'
import { type Params } from 'react-router-dom'

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
