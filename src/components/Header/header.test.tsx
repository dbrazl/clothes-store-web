import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { BrowserRouter } from 'react-router-dom'

test('should render header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})

test('should have a logo', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const logo = screen.getByTestId('logo')
  expect(logo).toBeInTheDocument()
})

test('should have a categories nav', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const nav = screen.getByTestId('categories-nav')
  expect(nav).toBeInTheDocument()
})

test('should have mobile menu button', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const button = screen.getByTestId('mobile-menu-button')
  expect(button).toBeInTheDocument()
})

test('should have mobile cart button', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const button = screen.getByTestId('cart-button')
  expect(button).toBeInTheDocument()
})
