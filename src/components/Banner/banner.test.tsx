import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '.'

test('should render breadcrumbs component', () => {
  render(<Banner />)
  const banner = screen.getByTestId('banner')
  expect(banner).toBeInTheDocument()
})
