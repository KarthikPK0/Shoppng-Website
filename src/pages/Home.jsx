import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import ProductSlider from '../components/ProductSlider'
import BrandBlock from '../components/BrandBlock'
import Achivements from '../components/Achivements'
import ReviewSlider from '../components/ReviewSlider'
import Blog from '../components/Blog'
import NewsLetter from '../components/NewsLetter'
import homeBanner from '../assets/images/homeBanner.avif'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'




function Home() {

  return (
    <>


      <Banner heading="Your Premium <br/> Sound, Unplugged!" imgSrc={homeBanner} showButton={true} />
      <Cards title="Our Premium Collection" />
      <ProductSlider />
      <BrandBlock />
      <Achivements />
      <ReviewSlider />
      <Blog />
      <NewsLetter />


    </>
  )
}

export default Home
