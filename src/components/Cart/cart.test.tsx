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

test('should render the empty component', () => {
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

const stateFilled: State = {
  cart: {
    open: false,
    products: [
      {
        id: 1,
        title: 'Product name',
        category: 'Category',
        description: 'Description',
        image: '',
        price: 1.00,
        quantity: 1,
        rating: {
          count: 5,
          rate: 5
        }
      }
    ]
  }
}

test('should render the product list', () => {
  render(
    <CartContext.Provider value={{ state: stateFilled, dispatch: () => {} }}>
      <Cart />
    </CartContext.Provider>
  )
  const list = screen.getByTestId('list')
  expect(list).toBeInTheDocument()
})

test('should render the product list', () => {
  render(
    <CartContext.Provider value={{ state: stateFilled, dispatch: () => {} }}>
      <Cart />
    </CartContext.Provider>
  )
  const list = screen.getByTestId('list')
  expect(list).toBeInTheDocument()
})

test('should render the freight', () => {
  render(
    <CartContext.Provider value={{ state: stateFilled, dispatch: () => {} }}>
      <Cart />
    </CartContext.Provider>
  )
  const list = screen.getByTestId('freight')
  expect(list).toBeInTheDocument()
})

test('should render button to checkout', () => {
  render(
    <CartContext.Provider value={{ state: stateFilled, dispatch: () => {} }}>
      <Cart />
    </CartContext.Provider>
  )
  const button = screen.getByText('Finalizar compra')
  expect(button).toBeInTheDocument()
})
