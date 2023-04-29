import React from 'react'
import { render, screen } from '@testing-library/react'
import { type ICartProduct } from 'models/Shelf'
import List from '.'

test('should render list', () => {
  render(<List data={[]} />)
  const list = screen.getByTestId('list')
  expect(list).toBeInTheDocument()
})

const product: ICartProduct = {
  id: 1,
  category: 'Category',
  description: 'Description',
  image: '',
  price: 1.00,
  quantity: 1,
  rating: {
    rate: 5.0,
    count: 5
  },
  title: 'Product name'
}

test('should render one product', () => {
  render(<List data={[product]} />)
  const products = screen.getAllByTestId('product')
  expect(products.length).toBe(1)
})

test('should product have name', () => {
  render(<List data={[product]} />)
  const component = screen.getByText('Product name')
  expect(component).toBeInTheDocument()
})

test('should product have name', () => {
  render(<List data={[product]} />)
  const component = screen.getByText('Product name')
  expect(component).toBeInTheDocument()
})
