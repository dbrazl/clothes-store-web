import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'

import { Device, useDevice } from 'hooks/useDevice'
import api from 'services/api'

import { TopBar, Header, Breadcrumbs, Banner, Shelf, Breadcrumb } from 'components'

import { type IProduct } from 'models/Shelf'

function Catalog (): JSX.Element {
  const { device } = useDevice()

  const { data } = useQuery({
    queryKey: ['products', device],
    queryFn: getProducts
  })

  function splitToChunks (array: IProduct[], parts: number): IProduct[][] {
    const result: IProduct[][] = []
    for (let i = 0; i < parts; i++) {
      switch (device) {
        case Device.SMARTPHONE:
          result.push(array.slice(i * 4, (1 + i) * 4))
          break

        case Device.TABLET:
          result.push(array.slice(i * 6, (1 + i) * 6))
          break

        case Device.LAPTOP:
          result.push(array.slice(i * 8, (1 + i) * 8))
          break

        default:
          break
      }
    }
    return result
  }

  async function getProducts (): Promise<IProduct[][]> {
    try {
      const response = await api.get('/products')

      switch (device) {
        case Device.SMARTPHONE:
          return splitToChunks(response.data, Math.ceil(response.data.length / 4))

        case Device.TABLET:
          return splitToChunks(response.data, Math.ceil(response.data.length / 6))

        case Device.LAPTOP:
          return splitToChunks(response.data, Math.ceil(response.data.length / 8))

        default:
          return [[]]
      }
    } catch (error) {
      console.error('An error occour during on try to get products')
      return [[]]
    }
  }

  return (
    <>
      <Helmet>
        <title>Produtos - Roupas</title>
      </Helmet>
      <TopBar />
      <Header />
      <Breadcrumbs>
        <Breadcrumb to="/" data-testid="breadcrumb">HOME</Breadcrumb>
        <Breadcrumb to="/catalog/clothes" data-testid="breadcrumb">ROUPAS</Breadcrumb>
      </Breadcrumbs>
      <Banner />
      <Shelf data={data ?? [[]]} />
    </>
  )
}

export default Catalog
