import { getCategories, getProducts } from '@/lib/api'
import { type Category, type Product } from '@/lib/types'
import ProductsPage from './components/ProductsPage'

interface ProductsPageLoaderProps {
  request: { signal: AbortSignal }
}

async function loader({
  request: { signal }
}: ProductsPageLoaderProps): Promise<{
  products: Product[]
  categories: Category[]
}> {
  return {
    products: await getProducts({ signal }),
    categories: await getCategories({ signal })
  }
}

const productsPageRoute = {
  loader,
  element: <ProductsPage />
}

export default productsPageRoute
