import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import products from '../data/products.json'


import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
  const productList = products;

  return (
    <Carousel renderThumbs={() => []} autoPlay infiniteLoop showStatus={false}>
      {
        productList.map(s => (
          <div className='imgCarousel'>
            <img src={s.image} />
          </div>
        ))
      }
    </Carousel>
  )
}

export default ImageCarousel;