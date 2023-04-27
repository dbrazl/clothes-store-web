import React from 'react'

import { AuthProvider } from './states'

interface ProviderType {
  children: React.ReactElement | React.ReactElement[]
}

function Provider ({ children }: ProviderType): JSX.Element {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default Provider
