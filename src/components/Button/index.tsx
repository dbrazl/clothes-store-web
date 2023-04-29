import React from 'react'

import { Container } from './styles'

interface IProps {
  children: string
  onClick?: () => void
}

function Button ({ children, onClick = () => {} }: IProps): JSX.Element {
  return <Container onClick={onClick} data-testid="button">{children}</Container>
}

export default Button
