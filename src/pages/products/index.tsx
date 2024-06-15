import { type Product } from '@/lib/types'
import { axios } from '@/lib/utils'
import { type ReactElement } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
function ProductsPage(): ReactElement {
  const products = useLoaderData() as Product[]
  const { state } = useNavigation()

  if (state === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Welcome to the shopping page</h1>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

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
