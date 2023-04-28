import React from 'react'

import { Container } from './styles'

interface IProps {
  children: string
}

function Button ({ children }: IProps): JSX.Element {
  return <Container data-testid="button">{children}</Container>
}

export default Button
