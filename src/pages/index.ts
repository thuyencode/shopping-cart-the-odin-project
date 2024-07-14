import PageContainer from '@/layouts/PageContainer'
import NotFoundRoutePage from './404'
import { LazyCartPage } from './Cart'
import { LazyHomePage } from './Home'
import { LazyProductPage, productLoader } from './Product'
import { LazyProductsPage, productsLoader } from './Products'

export { LazyCartPage, LazyHomePage, NotFoundRoutePage, PageContainer }

export { LazyProductPage, productLoader }

export { LazyProductsPage, productsLoader }
