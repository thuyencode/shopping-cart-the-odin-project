import ProductsPage from '@/components/ProductsPage'
import { type Product } from '@/lib/types'
import { axios } from '@/lib/utils'

interface ProductsPageLoader {
  request: { signal: AbortSignal }
}

async function loader({
  request: { signal }
}: ProductsPageLoader): Promise<Product[]> {
  return await axios
    .get('https://fakestoreapi.com/products?limit=10', { signal })
    .then((res) => res.data)
}

const productsPageRoute = {
  loader,
  element: <ProductsPage />
}

export default productsPageRoute
