import React from 'react'
import { Navigate, Route } from 'react-router-dom'

import { DEFAULT_PUBLIC_ROUTE } from 'configs/routes'

const wildcardRoutes = (): JSX.Element[] => {
  return [
    <Route
      key="public"
      path="*"
      element={<Navigate to={DEFAULT_PUBLIC_ROUTE} />}
    />
  ]
}

export default wildcardRoutes
