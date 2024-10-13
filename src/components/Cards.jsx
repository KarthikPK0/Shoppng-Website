import React, { useEffect } from 'react'
import './Cards.css'
import blackLeatherJacket from '../assets/images/leatherJacket.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
import { Link } from 'react-router-dom'


function Cards({ title }) {
  
  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state => state.productReducer)
  
  useEffect(() => {
  dispatch(fetchProducts())
  //console.log(allProducts); 
  },[])

  return (
    <>
    <div className="s2 pt-3 bg-light  " style={{ paddingBottom: '60px ', marginTop:'40px' }}>
        <h2 className="pt-5 fw-bold  text-center">
          {title}
        </h2>
        <p className="pt-3 pb-4">

          <ul className='collections flex-wrap'>
            <li><a href="#">All Products</a></li>
            <li><a href="#">Coats & Jacket</a></li>
            <li><a href="#">Dressed</a></li>
            <li><a href="#">Playsuit</a></li>
            <li><a href="#">Short</a></li>
            <li><a href="#">Skirt</a></li>
            <li><a href="#">T-Shirt</a></li>
          </ul>

        </p>

        
           {
            loading ?
            <div className="text-center mt-5 fw-bolder">
              <div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
            </div>
            :
            <div className="d-flex justify-content-center align-items-center flex-wrap cardContainer ">

              {
                allProducts?.length>0 ?
                allProducts.map((product)=>{
                 return <div key={product.id} className="card pt-3 d-flex align-items-center shadow pb-2 border-0 " style={{ width: '18rem', borderRadius:'0'}}>
                 <Link to={'id/productdetails'}>
                 <div className="card-image p-3  ">
                    <img src={product?.image} className="card-img-top img-fluid image-hover " alt="black-leather-jacket" />
                  </div>
                 </Link>
                  <div class="card-body  ">
                    <p className="card-title  ">{product?.category}</p>
                   <Link to={'id/productdetails'} href="#buy"> <h3 className="fw-bold pb-3 cardHead">
                      {product?.title.slice(0,10)}...
                    </h3></Link>
    
                    <Link to={'id/productdetails'}  style={{textDecoration:'none'}} className="arrow mb-4">
                      <i class="fa-solid fa-arrow-right text-light " style={{fontSize:'15px'}}></i>
                    </Link>
                  </div>
                </div>
    
                }):
                <div className="text-danger text-center">
                  No Products available
                </div>
              }

    
     

            </div>
           }
          </div>

          <div className=" text-center bg-light " style={{paddingBottom:'60px'}}>
            <button className="btn text-light findMoreBtn ">
              Find out More
            </button>

          </div>
   
    
      
    </>
  )
}

export default Cards
