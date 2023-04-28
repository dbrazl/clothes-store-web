import React from 'react'
import { render, screen } from '@testing-library/react'
import Carousel from '.'

test('should render carousel', () => {
  render(<Carousel />)
  const carouselItems = screen.getAllByTestId('carousel-item')
  expect(carouselItems).toBeGreaterThan(0)
})
