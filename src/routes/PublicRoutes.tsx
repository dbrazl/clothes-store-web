import {
  Home,
  Catalog,
  ProductPage
} from 'pages'

import { publicRoute } from './RouteTypes'

const publicRoutes = (): JSX.Element[] => {
  return [
    publicRoute({
      key: 'Home',
      path: '/',
      element: Home
    }),
    publicRoute({
      key: 'Catalog - Clothes',
      path: '/catalog/clothes',
      element: Catalog
    }),
    publicRoute({
      key: 'Produto',
      path: '/product/:id',
      element: ProductPage
    })
  ]
}

export default publicRoutes
