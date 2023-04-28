import React from 'react'
import { Helmet } from 'react-helmet'

import TopBar from 'components/TopBar'
import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'

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
    </>
  )
}

export default Catalog
