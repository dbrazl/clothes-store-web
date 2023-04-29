import React, { useContext } from 'react'

import { CartContext } from 'store/states/cart/state'
import { Actions } from 'store/states/cart/@types/actions'

import Button from 'components/Button'
import { Label } from './styles'

function Empty (): JSX.Element {
  const { dispatch } = useContext(CartContext)

  function closeCart (): void {
    dispatch({
      type: Actions.CLOSE_CART
    })
  }

  return (
    <>
      <Label>Seu carrinho está vazio</Label>
      <Button onClick={closeCart}>Continuar comprando</Button>
    </>
  )
}

export default Empty
