import { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'

function ProductPage(): ReactElement {
  const { id } = useParams()

  return (
    <>
      <h1>This is the product #{id}</h1>
    </>
  )
}

export default ProductPage
