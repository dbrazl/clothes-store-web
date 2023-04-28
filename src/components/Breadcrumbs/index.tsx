import React from 'react'

import { Breadcrumb, Container } from './styles'

function Breadcrumbs (): JSX.Element {
  return (
    <Container data-testid="breadcrumbs">
      <Breadcrumb to="/" data-testid="breadcrumb">HOME</Breadcrumb>
      <Breadcrumb to="/catalog/clothes" data-testid="breadcrumb">ROUPAS</Breadcrumb>
    </Container>
  )
}

export default Breadcrumbs
