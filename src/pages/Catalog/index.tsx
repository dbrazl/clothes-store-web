import React from 'react'
import { Helmet } from 'react-helmet'

import TopBar from 'components/TopBar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import Banner from 'components/Banner'

// import { Container } from './styles'

function Catalog (): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Produtos - Roupas</title>
      </Helmet>
      <TopBar />
      <Header />
      <Breadcrumbs />
      <Banner />
    </>
  )
}

export default Catalog
