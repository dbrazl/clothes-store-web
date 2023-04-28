import React from 'react'

import { Breadcrumb, Container } from './styles'

function Breadcrumbs (): JSX.Element {
  return (
    <Container>
      <Breadcrumb to="/">HOME</Breadcrumb>
      <Breadcrumb to="/catalog/clothes">ROUPAS</Breadcrumb>
    </Container>
  )
}

export default Breadcrumbs
