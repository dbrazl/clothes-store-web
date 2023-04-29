import React from 'react'

import { Container, Label, InputWrapper, Input, Button } from './styles'

function Freight (): JSX.Element {
  return (
    <Container data-testid="freight">
      <Label>Consulte prazo e valor do frete</Label>
      <InputWrapper>
        <Input placeholder="Digite seu CEP" mask="00000-000" data-testid="freight-input" />
        <Button>OK</Button>
      </InputWrapper>
    </Container>
  )
}

export default Freight
