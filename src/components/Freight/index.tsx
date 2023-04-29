import React from 'react'

import { Container, Label, InputWrapper, Input, Button } from './styles'

function Freight (): JSX.Element {
  return (
    <Container>
      <Label>Consulte prazo e valor do frete</Label>
      <InputWrapper>
        <Input placeholder="Digite seu CEP" mask="00000-000" />
        <Button>OK</Button>
      </InputWrapper>
    </Container>
  )
}

export default Freight
