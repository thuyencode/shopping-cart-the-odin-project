import { type Product } from '@/lib/types'
import { type ReactElement } from 'react'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'

function ProductsPage(): ReactElement {
  const products = useLoaderData() as Product[]
  const { state } = useNavigation()

  if (state === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <div className='container flex-1'>
      <h1>Welcome to the shopping page!</h1>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
