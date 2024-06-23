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

interface NavLinkClassNameProps {
  isActive: boolean
}

function Navbar(): ReactElement {
  function classNameWhenActive({ isActive }: NavLinkClassNameProps): string {
    return isActive ? 'link link-primary no-underline' : 'link link-hover'
  }

  function classNameWhenActiveMaxMdHidden({
    isActive
  }: NavLinkClassNameProps): string {
    return `${classNameWhenActive({ isActive })} max-md:hidden`
  }

  return (
    <DaisyNavbar className='sticky top-0 z-10 bg-base-100 shadow-lg'>
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
            <li role='menuitem'>
              <NavLink className={classNameWhenActive} to={'/'}>
                <h4 className='inline-flex items-center gap-1'>
                  <Icon icon={'mdi:home'} />
                  Home
                </h4>
              </NavLink>
            </li>
            <li role='menuitem'>
              <NavLink className={classNameWhenActive} to={'/products'}>
                <h4 className='inline-flex items-center gap-1'>
                  <Icon icon={'mdi:shopping'} />
                  Products
                </h4>
              </NavLink>
            </li>
          </Dropdown.Menu>
        </Dropdown>

        <h3>The Fake Store</h3>
      </DaisyNavbar.Start>

      <DaisyNavbar.End className='gap-5 max-md:w-max'>
        <NavLink className={classNameWhenActiveMaxMdHidden} to={'/'}>
          <h4 className='inline-flex items-center gap-1'>
            <Icon icon={'mdi:home'} />
            Home
          </h4>
        </NavLink>
        <NavLink className={classNameWhenActiveMaxMdHidden} to={'/products'}>
          <h4 className='inline-flex items-center gap-1'>
            <Icon icon={'mdi:shopping'} />
            Products
          </h4>
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
              <Icon className='text-xl lg:text-2xl' icon={'mdi:cart-variant'} />
            </Indicator>
          </Button>

          <Dropdown.Menu className='card card-compact z-[1] mt-3 w-52 bg-base-300 !p-0'>
            <Card.Body>
              <Card.Title className='text-lg font-bold'>8 Items</Card.Title>

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
        </Dropdown>
      </DaisyNavbar.End>
    </DaisyNavbar>
  )
}

export default Navbar
