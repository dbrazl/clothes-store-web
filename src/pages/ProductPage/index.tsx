import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

import api from 'services/api'
import { getPrice } from 'utils/getPrice'

import Header from 'components/Header'
import TopBar from 'components/TopBar'

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
      <Container>
        <Photo src={data?.image} alt={data?.title} />
        <ProductInfo>
          <Category>{data?.category}</Category>
          <ProductName>{data?.title}</ProductName>
          <Price>{getPrice(data?.price ?? 0)}</Price>
        </ProductInfo>
      </Container>
    </>
  )
}

export default ProductPage
