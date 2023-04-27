import React, { useContext } from 'react'
import { Navigate, Outlet, Route as DOMRoute } from 'react-router-dom'

import { AuthContext } from 'store/states/auth/state'

import { DEFAULT_PUBLIC_ROUTE } from 'configs/routes'

import { type Control, type Route } from './@types'

function Private ({ signed }: Control): JSX.Element {
  return signed ? <Outlet /> : <Navigate to={DEFAULT_PUBLIC_ROUTE} />
}

function Public (): JSX.Element {
  return <Outlet />
}

export function publicRoute ({
  key,
  path,
  element: Element
}: Route): JSX.Element {
  return (
    <DOMRoute key={key} path={path} element={<Public />}>
      <DOMRoute path={path} element={<Element />} />
    </DOMRoute>
  )
}

export function privateRoute ({
  key,
  path,
  element: Element
}: Route): JSX.Element {
  const { state } = useContext(AuthContext)
  const signed = state.auth.signed

  return (
    <DOMRoute key={key} path={path} element={<Private signed={signed} />}>
      <DOMRoute path={path} element={<Element />} />
    </DOMRoute>
  )
}
