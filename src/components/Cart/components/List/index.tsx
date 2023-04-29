import React from 'react'

import { type ICartProduct } from 'models/Shelf'

import { Container, Product, Image, Info, Name } from './styles'

interface IList {
  data: ICartProduct[]
}

function List ({ data }: IList): JSX.Element {
  function renderProduct (product: ICartProduct): JSX.Element {
    return (
      <Product key={product.id} data-testid="product">
        <Image src={product.image} />
        <Info>
          <Name>{product.title}</Name>
        </Info>
      </Product>
    )
  }

  return (
    <Container data-testid="list">
      {data.map(renderProduct)}
    </Container>
  )
}

export default List
