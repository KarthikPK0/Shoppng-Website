import React from 'react'
import Cards from '../components/Cards'
import Banner from '../components/Banner'
import galleryBanner from '../assets/images/galleryBanner.avif'
import ReviewSlider from '../components/ReviewSlider'
import NewsLetter from '../components/NewsLetter'

function Gallery() {
  return (
    <>
    <Banner heading="Our Gallery, <br /> 
Your Dreams!" imgSrc={galleryBanner} showButton={false}/>
    <Cards title="Our Gallery"/>

    <ReviewSlider/>
    <NewsLetter/>
  
      
    </>
  )
}

export default Gallery
