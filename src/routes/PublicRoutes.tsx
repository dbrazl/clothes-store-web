import {
  Home
} from 'pages'

import { publicRoute } from './RouteTypes'

const publicRoutes = (): JSX.Element[] => {
  return [
    publicRoute({
      key: 'Home',
      path: '/',
      element: Home
    })
  ]
}

export default publicRoutes
