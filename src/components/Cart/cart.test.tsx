import React from 'react'
import { render, screen } from '@testing-library/react'
import Cart from '.'

test('should render cart', () => {
  render(<Cart />)
  const cart = screen.getByTestId('cart')
  expect(cart).toBeInTheDocument()
})
