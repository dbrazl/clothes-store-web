import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

import api from 'services/api'
import { getPrice } from 'utils/getPrice'

import { Header, TopBar, Button, Breadcrumbs, Breadcrumb, Freight } from 'components'

import { type IProduct } from 'models/Shelf'

import { Category, Container, Photo, Price, ProductInfo, ProductName } from './styles'

function ProductPage (): JSX.Element {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['products', id],
    queryFn: getProduct
  })

  async function getProduct (): Promise<IProduct | undefined> {
    try {
      const response = await api.get(`/products/${id as string}`)
      return response.data
    } catch (error) {
      console.error('An error during on try to get product data')
    }
  }

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
      <TopBar />
      <Header />
      <Breadcrumbs>
        <Breadcrumb to="/" data-testid="breadcrumb">HOME</Breadcrumb>
        <Breadcrumb to="/catalog/clothes" data-testid="breadcrumb">ROUPAS</Breadcrumb>
        <Breadcrumb to={`/product/${id ?? 0}`} data-testid="breadcrumb">PRODUTO</Breadcrumb>
      </Breadcrumbs>
      <Container>
        <Photo src={data?.image} alt={data?.title} data-testid="photo" />
        <ProductInfo>
          <Category data-testid="category">{data?.category}</Category>
          <ProductName data-testid="product-name">{data?.title}</ProductName>
          <Price data-testid="price">{getPrice(data?.price ?? 0)}</Price>
          <Button>Adicionar ao carrinho</Button>
          <Freight />
        </ProductInfo>
      </Container>
    </>
  )
}

export default ProductPage
