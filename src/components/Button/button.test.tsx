import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

test('should render button', () => {
  render(<Button>Adicionar ao carrinho</Button>)
  const button = screen.getByTestId('button')
  expect(button).toBeInTheDocument()
})

test('should render button with label', () => {
  render(<Button>Uma label</Button>)
  const button = screen.getByText('Uma label')
  expect(button).toBeInTheDocument()
})
