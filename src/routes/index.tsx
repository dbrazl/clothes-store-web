import React, { useEffect } from 'react'
import { Routes, useLocation } from 'react-router-dom'

import publicRoutes from './PublicRoutes'
import privateRoutes from './PrivateRoutes'
import wildcardRoutes from './WildcardRoutes'

export function AppRoutes (): JSX.Element {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      {publicRoutes()}
      {privateRoutes()}
      {wildcardRoutes()}
    </Routes>
  )
}
