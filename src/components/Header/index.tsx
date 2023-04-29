import React, { useContext } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FiShoppingBag } from 'react-icons/fi'

import Cart from 'components/Cart'
import { CartContext } from 'store/states/cart/state'
import { Actions } from 'store/states/cart/@types/actions'

import { logo } from 'assets/images'
import { Categories, Category, Container, Logo, LogoLink, Button, ButtonsWrapper } from './styles'

function Header (): JSX.Element {
  const { dispatch } = useContext(CartContext)

  function openCart (): void {
    dispatch({
      type: Actions.OPEN_CART
    })
  }

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
        <Category to="" highlight={+true}>Bazar até 50%</Category>
      </Categories>

      <ButtonsWrapper>
        <Button onClick={openCart} data-testid="mobile-menu-button">
          <FiShoppingBag size={25} color='black' />
        </Button>
        <Button hiddenOnWeb data-testid="cart-button">
          <CgMenuRight size={25} color='black' />
        </Button>
      </ButtonsWrapper>

      <Cart />
    </Container>
  )
}

export default Header
