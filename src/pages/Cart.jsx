import React from 'react'
import galleryBanner from '../assets/images/galleryBanner.avif'
import Banner from '../components/Banner'
import ProductSlider from '../components/ProductSlider'
import NewsLetter from '../components/NewsLetter'
import SCart from '../components/SCart'




function Cart() {
  return (
    <>
     <Banner heading="Our Gallery, <br /> 
Your Dreams!" imgSrc={galleryBanner} showButton={false} />
<SCart/>
<ProductSlider/>

<NewsLetter/>
      
    </>
  )
}

export default Cart
