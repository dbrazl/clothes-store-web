import React from 'react'

import { type IProduct } from 'models/Shelf'
import { Category, Container, Name, Page, Photo, Price, Product } from './styles'

interface IProps {
  data: IProduct[][]
}

function Shelf ({ data }: IProps): JSX.Element {
  function getPrice (value: number): string {
    const [integer, decimals] = value.toFixed(2).split('.')
    return `R$ ${integer},${decimals}`
  }

  function renderProduct (product: IProduct): JSX.Element {
    return (
      <Product to="/catalog/clothes" data-testid="product" key={product.id}>
        <Photo src={product.image} alt={product.title} />
        <Category>{product.category}</Category>
        <Name>{product.title}</Name>
        <Price>{getPrice(product.price)}</Price>
      </Product>
    )
  }

  function renderPage (products: IProduct[], page: number): JSX.Element {
    return (
      <Page key={page}>
        {products.map(renderProduct)}
      </Page>
    )
  }

  return (
    <Container data-testid="shelf">
      {data.map(renderPage)}
    </Container>
  )
}

export default Shelf
