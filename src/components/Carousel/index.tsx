import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as Slider } from 'react-responsive-carousel'

function Carousel (): JSX.Element {
  return (
    <Slider autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div data-testid="carousel-item">
        <img src="https://images.prismic.io/foxtonprismic/43bdc2d2-b61d-4c81-9cab-84f9ec74721a_banner-principal-desk-classicos-para-aquecer.jpg?auto=compress,format&rect=0,0,1920,871&w=1920&h=871" />
      </div>
      <div data-testid="carousel-item">
        <img src="https://images.prismic.io/foxtonprismic/2a8dec1c-5392-4496-a657-f6870cf6ffe9_banner-principal-desk-inverno23.jpg?auto=compress,format&rect=0,0,1920,871&w=1920&h=871" />
      </div>
    </Slider>
  )
}

export default Carousel
