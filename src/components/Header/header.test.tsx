import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

test('should have a logo', () => {
  render(<Header />)
  const topBar = screen.getByTestId('logo')
  expect(topBar).toBeInTheDocument()
})

test('should have a categories nav', () => {
  render(<Header />)
  const topBar = screen.getByTestId('categories-nav')
  expect(topBar).toBeInTheDocument()
})

test('should have mobile menu button', () => {
  render(<Header />)
  const topBar = screen.getByTestId('mobile-menu-button')
  expect(topBar).toBeInTheDocument()
})
