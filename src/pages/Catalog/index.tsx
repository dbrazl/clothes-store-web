import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { Device, useDevice } from 'hooks/useDevice'
import api from 'services/api'

import TopBar from 'components/TopBar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Banner from 'components/Banner'
import Shelf from 'components/Shelf'

import { type IProduct } from 'models/Shelf'

// import { Container } from './styles'

function Catalog (): JSX.Element {
  const [products, setProducts] = useState<IProduct[][]>([[]])
  const { device } = useDevice()

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

  async function getProducts (): Promise<IProduct[][] | undefined> {
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
    }
  }

  useEffect(() => {
    async function getShelfProducts (): Promise<void> {
      try {
        const shelf: IProduct[][] | undefined = await getProducts()
        setProducts(shelf as IProduct[][])
      } catch (error) {
        console.log('An error occour during to try get shelf products')
      }
    }

    void getShelfProducts()
  }, [device])

  return (
    <>
      <Helmet>
        <title>Produtos - Roupas</title>
      </Helmet>
      <TopBar />
      <Header />
      <Breadcrumbs />
      <Banner />
      <Shelf data={products} />
    </>
  )
}

export default Catalog
