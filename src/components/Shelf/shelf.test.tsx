import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Shelf from '.'

test('should render shelf', () => {
  render(<Shelf data={[]} />)
  const shelf = screen.getByTestId('shelf')
  expect(shelf).toBeInTheDocument()
})

test('should render shelf with one item', () => {
  render(
    <BrowserRouter>
      <Shelf
        data={[[
          {
            category: 'Categoria',
            description: 'Descrição',
            id: 1,
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            price: 10.00,
            rating: { rate: 3.2, count: 120 },
            title: 'Shirt'
          }
        ]]} />
    </BrowserRouter>
  )
  const products = screen.getAllByTestId('product')
  expect(products.length).toBe(1)
})
