import React from 'react'

import { BigText, Container } from './styles'

function TopBar (): JSX.Element {
  return (
    <Container>
      <BigText>
        BAZAR
        <strong>ATÉ 50% OFF</strong>
      </BigText>
    </Container>
  )
}

export default TopBar
