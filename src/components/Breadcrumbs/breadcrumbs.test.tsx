import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs, { Breadcrumb } from '.'
import { BrowserRouter } from 'react-router-dom'

test('should render breadcrumbs component', () => {
  render(
    <BrowserRouter>
      <Breadcrumbs>
      </Breadcrumbs>
    </BrowserRouter>
  )
  const breadcrumbs = screen.getByTestId('breadcrumbs')
  expect(breadcrumbs).toBeInTheDocument()
})

test('should have breadcrumbs', () => {
  render(
    <BrowserRouter>
      <Breadcrumbs>
        <Breadcrumb to="/" data-testid="breadcrumb">HOME</Breadcrumb>
        <Breadcrumb to="/catalog/clothes" data-testid="breadcrumb">ROUPAS</Breadcrumb>
      </Breadcrumbs>
    </BrowserRouter>
  )
  const breadcrumbs = screen.getAllByTestId('breadcrumb')
  expect(breadcrumbs.length).toBeGreaterThan(0)
})
