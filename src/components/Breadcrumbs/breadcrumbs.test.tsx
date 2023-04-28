import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '.'
import { BrowserRouter } from 'react-router-dom'

test('should render breadcrumbs component', () => {
  render(
    <BrowserRouter>
      <Breadcrumbs />
    </BrowserRouter>
  )
  const breadcrumbs = screen.getByTestId('breadcrumbs')
  expect(breadcrumbs).toBeInTheDocument()
})

test('should have breadcrumbs', () => {
  render(
    <BrowserRouter>
      <Breadcrumbs />
    </BrowserRouter>
  )
  const breadcrumbs = screen.getAllByTestId('breadcrumb')
  expect(breadcrumbs.length).toBeGreaterThan(0)
})
