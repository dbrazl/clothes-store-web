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

test('should have a breadcrumbs', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const breadcrumbs = screen.getByTestId('breadcrumbs')
  expect(breadcrumbs).toBeInTheDocument()
})

test('should have a breadcrumbs', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const breadcrumbs = screen.getByTestId('breadcrumbs')
  expect(breadcrumbs).toBeInTheDocument()
})

test('should have the product photo', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const photo = screen.getByTestId('photo')
  expect(photo).toBeInTheDocument()
})

test('should have the category', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const category = screen.getByTestId('category')
  expect(category).toBeInTheDocument()
})

test('should have the product name', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const productName = screen.getByTestId('product-name')
  expect(productName).toBeInTheDocument()
})

test('should have the price', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const price = screen.getByTestId('price')
  expect(price).toBeInTheDocument()
})

test('should have a button to add to cart', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const button = screen.getByText('Adicionar ao carrinho')
  expect(button).toBeInTheDocument()
})

test('should have a button the freight component', () => {
  const client = new QueryClient()
  render(
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <ProductPage />
      </QueryClientProvider>
    </BrowserRouter>
  )
  const freight = screen.getByTestId('freight')
  expect(freight).toBeInTheDocument()
})
