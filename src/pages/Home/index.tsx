import React from 'react'

import TopBar from 'components/TopBar'
import Header from 'components/Header'
import Carousel from 'components/Carousel'

function Home (): JSX.Element {
  return (
    <div>
      <TopBar />
      <Header />
      <Carousel />
    </div>
  )
}

export default Home
