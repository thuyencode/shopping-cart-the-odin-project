import { Icon } from '@iconify/react'
import { type ReactElement } from 'react'
import {
  Badge,
  Button,
  Card,
  Navbar as DaisyNavbar,
  Dropdown,
  Indicator
} from 'react-daisyui'
import { NavLink } from 'react-router-dom'

function Navbar(): ReactElement {
  function classNameWhenActive({ isActive }: { isActive: boolean }): string {
    return isActive ? 'link link-primary no-underline' : 'link link-hover'
  }

  return (
    <DaisyNavbar>
      <DaisyNavbar.Start className='gap-2.5 max-md:flex-1'>
        <Dropdown>
          <Button
            tag='label'
            color='ghost'
            tabIndex={0}
            className='md:hidden'
            size='sm'
          >
            <Icon className='text-xl' icon={'mdi:hamburger-menu'} />
          </Button>
          <Dropdown.Menu
            tabIndex={0}
            className='menu-sm z-[1] mt-3 w-52 bg-base-300'
          >
            <Dropdown.Item>
              <NavLink className={classNameWhenActive} to={'/'}>
                <h4>Home</h4>
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className={classNameWhenActive} to={'/products'}>
                <h4>Products</h4>
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h3>The Fake Store</h3>
      </DaisyNavbar.Start>

      <DaisyNavbar.End className='gap-5 max-md:w-max'>
        <NavLink
          className={({ isActive }) =>
            `${classNameWhenActive({ isActive })} max-md:hidden`
          }
          to={'/'}
        >
          <h4>Home</h4>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${classNameWhenActive({ isActive })} max-md:hidden`
          }
          to={'/products'}
        >
          <h4>Products</h4>
        </NavLink>
        <Dropdown end>
          <Button tag='label' tabIndex={0} color='ghost' shape='circle'>
            <Indicator>
              <Badge
                size='sm'
                color='primary'
                className={Indicator.Item.className()}
              >
                8
              </Badge>
              <Icon className='text-2xl' icon={'mdi:cart-variant'} />
            </Indicator>
          </Button>

          <Dropdown.Menu className='card card-compact z-[1] mt-3 w-52 bg-base-300 !p-0'>
            <Card.Body>
              <span className='text-lg font-bold'>8 Items</span>
              <span className='text-info'>Subtotal: $999</span>
              <Card.Actions>
                <NavLink className='w-full' to={'/cart'}>
                  <Button color='primary' fullWidth>
                    View cart
                  </Button>
                </NavLink>
              </Card.Actions>
            </Card.Body>
          </Dropdown.Menu>
        </Dropdown>{' '}
      </DaisyNavbar.End>
    </DaisyNavbar>
  )
}

export default Navbar
