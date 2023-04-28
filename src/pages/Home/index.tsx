import React from 'react'
import { Helmet } from 'react-helmet'

import TopBar from 'components/TopBar'
import Header from 'components/Header'
import Carousel from 'components/Carousel'

function Home (): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Magasin</title>
      </Helmet>
      <TopBar />
      <Header />
      <Carousel />
    </>
  )
}

export default Home
