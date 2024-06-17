import { getProducts } from '@/api/products'
import { type Product } from '@/lib/types'
import ProductsPage from './components/ProductsPage'

interface ProductsPageLoader {
  request: { signal: AbortSignal }
}

async function loader({
  request: { signal }
}: ProductsPageLoader): Promise<Product[]> {
  return await getProducts({ signal })
}

const productsPageRoute = {
  loader,
  element: <ProductsPage />
}

export default productsPageRoute
