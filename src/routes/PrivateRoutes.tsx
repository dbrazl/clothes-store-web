import { type ReactElement } from 'react'

import {
  Account
} from 'pages'

import { privateRoute } from './RouteTypes'

const privateRoutes = (): Array<ReactElement | null> => {
  return [
    privateRoute({
      key: 'Account',
      path: '/account',
      element: Account
    })
  ]
}

export default privateRoutes
