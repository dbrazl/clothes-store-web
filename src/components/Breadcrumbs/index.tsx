import React from 'react'

import { Breadcrumb, Container } from './styles'

interface IBreadcrumbs {
  children: JSX.Element | JSX.Element[]
}

function Breadcrumbs ({ children }: IBreadcrumbs): JSX.Element {
  return (
    <Container data-testid="breadcrumbs">
      {children}
    </Container>
  )
}

export { Breadcrumb }
export default Breadcrumbs
