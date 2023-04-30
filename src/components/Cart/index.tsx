import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'

import { CartContext } from 'store/states/cart/state'
import { Actions } from 'store/states/cart/@types/actions'

import Freight from 'components/Freight'
import { Empty, List } from './components'
import { CloseButton, Container, Title } from './styles'

function Cart (): JSX.Element {
  const { state, dispatch } = useContext(CartContext)

  function closeCart (): void {
    dispatch({
      type: Actions.CLOSE_CART
    })
  }

  return (
    <Container open={state.cart.open} data-testid="cart">
      <CloseButton onClick={closeCart}>
        <IoMdClose size={25} color='black' />
      </CloseButton>
      <Title>Produtos</Title>
      {state.cart.products.length <= 0
        ? <Empty />
        : <List data={state.cart.products} />}
      {state.cart.products.length > 0
        ? <Freight />
        : null}
    </Container>
  )
}

export default Cart
