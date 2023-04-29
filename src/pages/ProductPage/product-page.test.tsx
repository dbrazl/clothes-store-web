import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import ProductPage from '.'

test('should have a top bar', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const topBar = screen.getByTestId('top-bar')
  expect(topBar).toBeInTheDocument()
})

test('should have a header', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})
