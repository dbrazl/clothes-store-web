import React from 'react'
import { render, screen } from '@testing-library/react'
import { CartContext } from 'store/states/cart/state'
import { type State } from 'store/states/cart/@types'
import Cart from '.'

test('should render cart', () => {
  render(<Cart />)
  const cart = screen.getByTestId('cart')
  expect(cart).toBeInTheDocument()
})

test('should render have an empty component', () => {
  const state: State = {
    cart: {
      open: false,
      products: []
    }
  }

  render(
    <CartContext.Provider value={{ state, dispatch: () => {} }}>
      <Cart />
    </CartContext.Provider>
  )
  const label = screen.getByText('Seu carrinho está vazio')
  expect(label).toBeInTheDocument()
})
