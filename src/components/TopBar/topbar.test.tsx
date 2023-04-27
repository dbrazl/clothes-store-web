import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

test('should have a banner', () => {
  render(<Header />)
  const banner = screen.getByTestId('top-bar')
  expect(banner).toBeInTheDocument()
})

test('should have a text on banner', () => {
  render(<Header />)
  const text = screen.getByText('BAZAR')
  expect(text).toBeInTheDocument()
})
