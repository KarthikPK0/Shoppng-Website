import React from 'react'
import NewsLetter from '../components/NewsLetter'
import ProductGrid from '../components/ProductGrid'
import Banner from '../components/Banner'
import shoppingBanner from '../assets/images/shopBanner.avif'

function Shop() {
  return (
    <>
   <Banner heading="Home Shopping, Your Choice!" showButton={false} imgSrc={shoppingBanner} />
   <ProductGrid/>
   <NewsLetter/>
      
    </>
  )
}

export default Shop
