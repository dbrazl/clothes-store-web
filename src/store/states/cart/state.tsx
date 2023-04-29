/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useMemo, useReducer } from 'react'
import { type State, type CartProviderType, type Provider } from './@types'
import cartReducer from './reducer'

const initialState: State = {
  cart: {
    open: false,
    products: []
  }
}

const initialProvider: Provider = { state: initialState, dispatch: () => {} }

export const CartContext = createContext<Provider>(initialProvider)

function CartProvider ({ children }: CartProviderType): JSX.Element {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const provider: Provider = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <CartContext.Provider value={provider}>{children}</CartContext.Provider>
  )
}

export default CartProvider
