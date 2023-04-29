import React from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FiShoppingBag } from 'react-icons/fi'

import { logo } from 'assets/images'
import { Categories, Category, Container, Logo, LogoLink, Button, ButtonsWrapper } from './styles'

function Header (): JSX.Element {
  return (
    <Container data-testid="header">
      <LogoLink to="/">
        <Logo src={logo} data-testid="logo" />
      </LogoLink>

      <Categories data-testid="categories-nav">
        <Category to="">Novidades</Category>
        <Category to="/catalog/clothes">Roupas</Category>
        <Category to="">Calçados</Category>
        <Category to="">Acessórios</Category>
        <Category to="">Parcerias</Category>
        <Category to="">Linhas</Category>
        <Category to="" highlight>Bazar até 50%</Category>
      </Categories>

      <ButtonsWrapper>
        <Button data-testid="mobile-menu-button">
          <FiShoppingBag size={25} color='black' />
        </Button>
        <Button hiddenOnWeb data-testid="mobile-menu-button">
          <CgMenuRight size={25} color='black' />
        </Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default Header
