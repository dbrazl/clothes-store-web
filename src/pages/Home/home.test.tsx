import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '.'

test('should have a top bar', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const topBar = screen.getByTestId('top-bar')
  expect(topBar).toBeInTheDocument()
})

test('should have a header', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})

test('should have a carousel', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const carouselItem = screen.getAllByTestId('carousel-item')
  expect(carouselItem.length).toBeGreaterThan(0)
})

test('should have the home title on page', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  await waitFor(() => { expect(document.title).toEqual('Magasin') })
})
