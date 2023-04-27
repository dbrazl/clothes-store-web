import React from 'react'
import { CgMenuRight } from 'react-icons/cg'

import { logo } from 'assets/images'
import { Categories, Category, Container, Logo, SandwichButton } from './styles'

function Header (): JSX.Element {
  return (
    <Container data-testid="header">
      <Logo src={logo} data-testid="logo" />

      <Categories data-testid="categories-nav">
        <Category>Novidades</Category>
        <Category>Roupas</Category>
        <Category>Calçados</Category>
        <Category>Acessórios</Category>
        <Category>Parcerias</Category>
        <Category>Linhas</Category>
        <Category highlight>Bazar até 50%</Category>
      </Categories>

      <SandwichButton data-testid="mobile-menu-button">
        <CgMenuRight size={25} color='black' />
      </SandwichButton>
    </Container>
  )
}

export default Header
