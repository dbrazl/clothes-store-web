import React from 'react'
import { render, screen } from '@testing-library/react'
import Empty from '.'

test('should render a label what says the cart is empty', () => {
  render(<Empty />)
  const label = screen.getByText('Seu carrinho está vazio')
  expect(label).toBeInTheDocument()
})

test('should render a button to continue buying', () => {
  render(<Empty />)
  const button = screen.getByText('Continuar comprando')
  expect(button).toBeInTheDocument()
})
