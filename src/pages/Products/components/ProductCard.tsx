import { type Product } from '@/lib/types'
import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import { Button, Card, Tooltip } from 'react-daisyui'
import { Link } from 'react-router-dom'

function ProductCard(
  props: Pick<Product, 'image' | 'title' | 'price' | 'id'>
): ReactElement {
  return (
    <Link to={`/products/${props.id}`}>
      <Tooltip message={props.title} color='info'>
        <Card className='max-w-64 bg-base-100' compact>
          <Card.Image
            className='aspect-square object-cover object-top duration-300 hover:scale-105'
            src={props.image}
          />
          <Card.Body className='gap-5'>
            <Card.Title className='justify-between text-base font-normal capitalize'>
              <span className='truncate font-medium'>{props.title}</span>
              <span>{props.price}$</span>
            </Card.Title>
            <Card.Actions>
              <Button fullWidth color='neutral'>
                Check this product
                <Icon className='text-xl' icon={'mdi:shopping'} />
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </Tooltip>
    </Link>
  )
}

export default ProductCard
