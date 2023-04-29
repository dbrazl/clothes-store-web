import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

import api from 'services/api'
import { getPrice } from 'utils/getPrice'
import { CartContext } from 'store/states/cart/state'

import { Header, TopBar, Button, Breadcrumbs, Breadcrumb, Freight } from 'components'

import { type IProduct } from 'models/Shelf'

import { Category, Container, Photo, Price, ProductInfo, ProductName } from './styles'
import { Actions } from 'store/states/cart/@types/actions'

function ProductPage (): JSX.Element {
  const { id } = useParams()
  const { dispatch } = useContext(CartContext)
  const navigate = useNavigate()

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

  function addProductToCart (): void {
    dispatch({
      type: Actions.ADD_ITEM_TO_CART,
      payload: data
    })
    navigate('/catalog/clothes')
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
          <Button onClick={addProductToCart}>Adicionar ao carrinho</Button>
          <Freight />
        </ProductInfo>
      </Container>
    </>
  )
}

export default ProductPage
