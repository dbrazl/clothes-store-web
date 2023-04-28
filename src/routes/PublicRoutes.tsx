import {
  Home,
  Catalog
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
    })
  ]
}

export default publicRoutes
