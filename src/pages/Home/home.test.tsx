import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

test('should have a top bar', () => {
  render(<Home />)
  const topBar = screen.getByTestId('top-bar')
  expect(topBar).toBeInTheDocument()
})

test('should have a header', () => {
  render(<Home />)
  const header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})

test('should have a carousel', () => {
  render(<Home />)
  const carouselItem = screen.getAllByTestId('carousel-item')
  expect(carouselItem.length).toBeGreaterThan(0)
})
