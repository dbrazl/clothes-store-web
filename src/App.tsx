import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from 'routes'
import Provider from 'store/provider'
import { GlobalStyles } from './global/styles'

function App (): JSX.Element {
  return (
    <Provider>
      <Router>
        <AppRoutes />
      </Router>
      <GlobalStyles />
    </Provider>
  )
}

export default App
