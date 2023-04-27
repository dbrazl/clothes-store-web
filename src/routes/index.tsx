import React from 'react'
import { Routes } from 'react-router-dom'

import publicRoutes from './PublicRoutes'
import privateRoutes from './PrivateRoutes'
import wildcardRoutes from './WildcardRoutes'

export function AppRoutes (): JSX.Element {
  return (
    <Routes>
      {publicRoutes()}
      {privateRoutes()}
      {wildcardRoutes()}
    </Routes>
  )
}
