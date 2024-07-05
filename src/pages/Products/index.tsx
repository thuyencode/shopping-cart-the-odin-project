import { getCategories, getProducts } from '@/lib/api'
import { type Category, type Product, type SortIn } from '@/lib/types'
import { type Params } from 'react-router-dom'
import ProductsPage from './ProductsPage'

interface ProductsPageLoaderProps {
  params: Params<string>
  request: Request
}

async function loader({ request }: ProductsPageLoaderProps): Promise<{
  products: Product[]
  categories: Category[]
}> {
  const searchParams = new URL(request.url).searchParams
  const category = (searchParams.get('category') ?? undefined) as
    | Category
    | undefined
  const sortIn = (searchParams.get('sortIn') ?? undefined) as SortIn | undefined
  const search = searchParams.get('search') ?? undefined

  const products = await getProducts({
    signal: request.signal,
    category,
    sortIn
  })

  let filteredProducts = products

  if (search !== undefined) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  return {
    products: filteredProducts,
    categories: await getCategories({ signal: request.signal })
  }
}

const productsPageRoute = {
  loader,
  element: <ProductsPage />
}

export default productsPageRoute
