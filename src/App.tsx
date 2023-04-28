import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AppRoutes } from 'routes'
import Provider from 'store/provider'
import { GlobalStyles } from './global/styles'

function App (): JSX.Element {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Router>
          <AppRoutes />
        </Router>
        <GlobalStyles />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
