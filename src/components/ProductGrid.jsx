import React from 'react'
import './ProductGrid.css'
import blackLeatherJacket from '../assets/images/leatherJacket.jpeg'
import filterIcon from '../assets/images/Filter.png'
import filterBar from '../assets/images/Filters.png'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function ProductGrid() {
  return (
    <div className='bg-light '>
    <div className="container bg-light" style={{ paddingTop:'80px'}}>
      <div className="d-flex flex-row productsContainer flex-wrap">
        <div style={{width:'30%'}} className="productDetails d-flex flex-column px-4 py-4 ">

        <div className="input-group mx-auto border border-dark py-1 px-2 mb-4">
    <input
        className="form-control form-control-sm border-0"
        type="search"
        placeholder="Search products"
        aria-label="Search"
        
    />
    <span className="input-group-text bg-white  border-0">
        <i className="fa-solid fa-magnifying-glass"></i>
    </span>
</div>

<div className="w-100 d-flex justify-content-between pt-3 pb-2 ">
  <h4 className='fw-bold'>
    Price
  </h4>

  <img style={{maxWidth:'100%', height:'24px'}} src={filterIcon} alt="filter-icon" />
</div>
<div className="w-100  ">
    <img src={filterBar} alt="" style={{maxWidth:'100%', height:'auto'}} />
  </div>

  <div className="w-100 d-flex justify-content-between pt-2 pb-2">
    <span>
    Range
    </span>
    <span>
    $5-$20
    </span>
  </div>

<div className="sidebar container-fluid p-0 mt-5">
  <h5 className='fw-bold'>
  Product Categories
  </h5>
<Sidebar className='border-0'> 
  <Menu>
    <SubMenu label="Coats and Jackets" >
      <MenuItem> Item-1 </MenuItem>
      <MenuItem> Item-2 </MenuItem>
    </SubMenu>

    <SubMenu label="Dresses">
    <MenuItem> Item-1 </MenuItem>
    <MenuItem> Item-2 </MenuItem>
    </SubMenu>

    <SubMenu label="Playsuit">
    <MenuItem> Item-1 </MenuItem>
    <MenuItem> Item-2 </MenuItem>
    </SubMenu>

    <SubMenu label="Short">
    <MenuItem> Item-1 </MenuItem>
      <MenuItem> Item-2 </MenuItem>
    </SubMenu>

    <SubMenu label="Top">
    <MenuItem> Item-1 </MenuItem>
      <MenuItem> Item-2 </MenuItem>
    </SubMenu>

    <SubMenu label="Bottoms">
    <MenuItem> Item-1 </MenuItem>
    <MenuItem> Item-2 </MenuItem>
    </SubMenu>
   
  </Menu>
</Sidebar>

</div>

  <div  style={{gap:'5px'}} className="fpContainer w-100 d-flex flex-column">
  <h5 className='fw-bold pt-5 '>
    Featured Product
  </h5>

  <div  className="fpCard d-flex flex-row flex-nowrap">
    <div className="fpImage p-2 ps-0 d-flex align-items-center justify-content-center">
      <img className='img-fluid' src={blackLeatherJacket} alt="" style={{
        maxWidth:'100%', height:'75px'
      }} />
  </div>
  <div className="fpContent d-flex flex-column justify-content-center ps-3 pt-3">
        <h6 className='fw-bold'>
          Tropical Playsuit
        </h6>
        <p style={{
          color:'#F86338', fontWeight:'500'
        }}>
        $100
        </p>
  </div>


  

    </div>
    <div className="fpCard d-flex flex-row flex-nowrap">
    <div className="fpImage p-2 ps-0  d-flex align-items-center justify-content-center">
      <img className='img-fluid' src={blackLeatherJacket} alt="" style={{
        maxWidth:'100%', height:'75px'
      }} />
  </div>
  <div className="fpContent d-flex flex-column justify-content-center ps-3 pt-3">
        <h6 className='fw-bold'>
          Tropical Playsuit
        </h6>
        <p style={{
          color:'#F86338', fontWeight:'500'
        }}>
        $100
        </p>
  </div>


  

    </div>




  </div>


        </div>


        <div className="productCards d-flex flex-row flex-wrap py-4 ps-0 ps-md-5 " style={{gap:'15px', width:'70%'}}>  


        <div className="card d-flex flex-column align-items-center " style={{width:'22rem'}}>
          <div className="heartIcon d-flex justify-content-end pe-3 pt-2 w-100">
         <span className="heartIconContainer rounded ">
         <i class="fa-regular fa-heart heartIcon"></i>
         </span>
          </div>
<div className='ps-3 pe-3 pb-0'>

<img src={blackLeatherJacket} className="card-img-top img-fluid " alt="..."/>
</div>
  <div class="card-body">
    <a href='#buy' className="text-center fw-bold  mb-0">
    Urbano Jacket
    </a>

    <p className="text-center ratings mb-1">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    </p>

    <p className="text-center seller mb-1">
    watchmenow
    </p>

    <p style={{color:'#F86338'}} className="text-center price">
    $99
    </p>
  </div>
</div>

  <div className="card d-flex flex-column align-items-center " style={{width:'22rem'}}>
          <div className="heartIcon d-flex justify-content-end pe-3 pt-2 w-100">
         <span className="heartIconContainer rounded ">
         <i class="fa-regular fa-heart heartIcon"></i>
         </span>
          </div>
<div className='ps-3 pe-3 pb-0'>

<img src={blackLeatherJacket} className="card-img-top img-fluid " alt="..."/>
</div>
  <div class="card-body">
    <a href='#buy' className="text-center fw-bold  mb-0">
    Urbano Jacket
    </a>

    <p className="text-center ratings mb-1">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    </p>

    <p className="text-center seller mb-1">
    watchmenow
    </p>

    <p style={{color:'#F86338'}} className="text-center price">
    $99
    </p>
  </div>
</div>

<div className="card d-flex flex-column align-items-center " style={{width:'22rem'}}>
          <div className="heartIcon d-flex justify-content-end pe-3 pt-2 w-100">
         <span className="heartIconContainer rounded ">
         <i class="fa-regular fa-heart heartIcon"></i>
         </span>
          </div>
<div className='ps-3 pe-3 pb-0'>

<img src={blackLeatherJacket} className="card-img-top img-fluid " alt="..."/>
</div>
  <div class="card-body">
    <a href='#buy' className="text-center fw-bold  mb-0">
    Urbano Jacket
    </a>

    <p className="text-center ratings mb-1">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    </p>

    <p className="text-center seller mb-1">
    watchmenow
    </p>

    <p style={{color:'#F86338'}} className="text-center price">
    $99
    </p>
  </div>
</div>

<div className="card d-flex flex-column align-items-center " style={{width:'22rem'}}>
          <div className="heartIcon d-flex justify-content-end pe-3 pt-2 w-100">
         <span className="heartIconContainer rounded ">
         <i class="fa-regular fa-heart heartIcon"></i>
         </span>
          </div>
<div className='ps-3 pe-3 pb-0'>

<img src={blackLeatherJacket} className="card-img-top img-fluid " alt="..."/>
</div>
  <div class="card-body">
    <a href='#buy' className="text-center fw-bold  mb-0">
    Urbano Jacket
    </a>

    <p className="text-center ratings mb-1">
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    <i class="fa-solid fa-star "></i>
    </p>

    <p className="text-center seller mb-1">
    watchmenow
    </p>

    <p style={{color:'#F86338'}} className="text-center price">
    $99
    </p>
  </div>
</div>

<div className="w-100 d-flex justify-content-center py-4">
          <div style={{backgroundColor:'#F86338'}} className="btn text-light seeMoreBtn">
            See More
          </div>
        </div>

        </div>



    
      </div>

    </div>
      
    </div>
  )
}

export default ProductGrid
