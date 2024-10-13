import React from 'react'
import './ReviewSlider.css'
import './ProductSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import happyCustomers from '../assets/images/happyCustomers.jpg'




function ReviewSlider() {
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="custom-arrow custom-prev-arrow shadow" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    
      const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="custom-arrow custom-next-arrow shadow" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    
    
      };
  return (
    <>
     <div className="slider-container2 custom-slider-container bg-light pb-4 ">

<Slider {...settings2}>
  <div className='d-flex justify-content-center'>
    <div style={{ backgroundColor: '#fff' }} className='row w-100 '>
      <div className="col col-12 col-md-6 col-lg-6 pt-5 pb-5 d-flex justify-content-center">
        <img style={{ maxWidth: '100%', height: '400px' }} src={happyCustomers} alt="happy-customers" />
      </div>
      <div className="col col-12 col-md-6 col-lg-6  p-2 ps-5 ps-md-0">
        <h1 style={{ color: '#F86338' }} className="pt-5  text-start">
          Good Seller!
        </h1>
        <p style={{ padding: '0 80px 0 0' }} className="pt-3  text-start pb-3 ">
          I am very happy with the services provided, it is very helpful, starting
          from the insight that the company gave from the start that I did not
          understand what it was so I got knowledge and made my website
          look better
        </p>
        <p className='fw-bold fs-4 mb-2'>Anna Saraspova</p>
        <p>Your Beloved Buyer</p>
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center'>
    <div style={{ backgroundColor: '#fff' }} className='row w-100 '>
      <div className="col col-12 col-md-6 col-lg-6 pt-5 pb-5 d-flex justify-content-center">
        <img style={{ maxWidth: '100%', height: '400px' }} src={happyCustomers} alt="happy-customers" />
      </div>
      <div className="col col-md-6 col-lg-6 p-2">
        <h1 style={{ color: '#F86338' }} className="pt-5  text-start ">
          Good Seller!
        </h1>
        <p style={{ padding: '0 80px 0 0' }} className="pt-3 text-start pb-3 ">
          I am very happy with the services provided, it is very helpful, starting br
          from the insight that the company gave from the start that I did not
          understand what it was so I got knowledge and made my website
          look better
        </p>
        <p className='fw-bold fs-4 mb-2 '>Anna Saraspova</p>
        <p>Your Beloved Buyer</p>
      </div>
    </div>
  </div>

</Slider>
</div>
      
    </>
  )
}

export default ReviewSlider
