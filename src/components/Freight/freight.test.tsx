import React from 'react'
import { render, screen } from '@testing-library/react'
import Freight from '.'

test('should render freight', () => {
  render(<Freight />)
  const freight = screen.getByTestId('freight')
  expect(freight).toBeInTheDocument()
})

test('should have a label', () => {
  render(<Freight />)
  const label = screen.getByText('Consulte prazo e valor do frete')
  expect(label).toBeInTheDocument()
})

test('should have a label', () => {
  render(<Freight />)
  const label = screen.getByText('Consulte prazo e valor do frete')
  expect(label).toBeInTheDocument()
})

test('should have an input for cep', () => {
  render(<Freight />)
  const input = screen.getByTestId('freight-input')
  expect(input).toBeInTheDocument()
})

test('should have an button for search cep', () => {
  render(<Freight />)
  const button = screen.getByText('OK')
  expect(button).toBeInTheDocument()
})
