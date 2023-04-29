import React from 'react'

import { AuthProvider, CartProvider } from './states'

interface ProviderType {
  children: React.ReactElement | React.ReactElement[]
}

function Provider ({ children }: ProviderType): JSX.Element {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  )
}

export default Provider
