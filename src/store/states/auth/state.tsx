/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useMemo, useReducer } from 'react'
import { getAuthetification } from 'services/sessionStorage'
import { type State, type AuthProviderType, type Provider } from './@types'
import authReducer from './reducer'

const initialState: State = {
  auth: {
    signed: false
  }
}

const initialData: State = getAuthetification() ?? initialState
const initialProvider: Provider = { state: initialData, dispatch: () => {} }

export const AuthContext = createContext<Provider>(initialProvider)

function AuthProvider ({ children }: AuthProviderType): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, initialData)
  const provider: Provider = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <AuthContext.Provider value={provider}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
