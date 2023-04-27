import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

test('should have a top bar', () => {
  render(<Home />)
  const topBar = screen.getByTestId('top-bar')
  expect(topBar).toBeInTheDocument()
})
