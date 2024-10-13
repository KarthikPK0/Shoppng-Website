import React, { useEffect } from 'react'
import './ProductSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blackLeatherJacket from '../assets/images/leatherJacket.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';


function ProductSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state => state.productReducer)
  
  useEffect(() => {
  dispatch(fetchProducts())
  //console.log(allProducts); 
  },[])

  return (
    <>
        <div style={{paddingTop:'80px'}} className="s3 container-fluid ">
        <h2 className=" fw-bold  text-center  ">
          Top Items
        </h2>
        <p className="pt-2 text-center pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>



        <div style={{ paddingBottom: '80px' }} className="slider-container ">
          <Slider {...settings}>

            {
              allProducts?.length>0 ?
              allProducts.map((product) => {
                return (
                  <div className="card pt-2 d-flex align-items-center scroll-card ms-2 ms-md-0" key={product.id}>
                    <div className="w-100 d-flex justify-content-start">
                      <span
                        style={{ backgroundColor: '#FFFFFF', color: '#F86338', fontSize: '13px', padding: '1px 5px', borderRadius: '6px', fontWeight: '500' }}
                        className='ms-2'
                      >
                        SALE
                      </span>
                    </div>
                    <div className="p-2 mt-2">
                      <img src={product?.image}  className="card-img-top img-fluid image-hover sliderCardImg scroll-card-img" alt="black-leather-jacket" />
                    </div>
                    <div className="card-body">
                      <h5 className="text-center scroll-card-head">
                        <a className='cardTitle' href="#"> {product?.title.slice(0,10)}...</a>
                      </h5>
                      <p className="card-title text-center scroll-card-para">{product.category}</p>
                      <p className="text-center d-flex flex-row flex-wrap justify-content-center mb-1 scroll-card-para2" style={{ color: "#555" }}>
                        <span className='me-2' style={{ color: '#F86338' }}>{product.price}</span> $1054
                      </p>
                    </div>
                  </div>
                );
              })

            :   <div className="text-danger text-center">
            No Products available
          </div>}


          </Slider>
        </div>

      </div>
      
    </>
  )
}

export default ProductSlider
