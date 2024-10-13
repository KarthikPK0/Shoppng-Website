import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* fist-nav */}
            <div className="fnav w-100  d-flex justify-content-between align-items-center flex-wrap pb-2">
              <Link to={'/'} style={{textDecoration:'none'}}>  <span className="logo">Dealerz.</span></Link>
                <div>
                    <a href='#callcenter' className='me-3 queryLink' ><i class="fa-solid fa-phone me-1"></i>
                        Call Center</a>
                    <a href='#shipping&returns' className='queryLink'><i class="fa-solid fa-truck me-1"></i>Shipping & Returns</a>
                </div>
            </div>
            {/* second-nav */}
            <nav className="snav navbar navbar-expand-lg bg-body-tertiary">
    <div  style={{ padding: '10px 0 10px 5px' }}>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0  ms-3 d-flex justify-content-center w-100 ">
                <li className="nav-item">
                    <Link to={'/shop'} className="nav-link" aria-current="page" href="#">Shop</Link>
                </li>
                <Link to={'/gallery'} className="nav-link" aria-current="page" href="#">Gallery</Link>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Blog</a>
                </li>
            </ul>

            <div className="input-group custom-width mx-auto">
                <input
                    className="form-control border-0 "
                    type="search"
                    placeholder="Search what you need"
                    aria-label="Search"
                    style={{ fontSize: '1rem', padding: '10px', width:'100px' }}
                />
                <span className="input-group-text bg-white border-0">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>

            
            <ul  className="icons d-flex justify-content-center ">
                <li><a href="#"><i className="fa-regular fa-heart nicon"></i></a></li>
                <li>
                    <Link to={'/cart'}>
                        <div className="cart-container position-relative">
                            <i className="fa-solid fa-cart-shopping nicon"></i>
                            <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>
                        </div>
                    </Link>
                </li>
                <li><a href="#"><i className="fa-regular fa-user nicon"></i></a></li>
                <li><a href="#"><i className="fa-regular fa-bell nicon"></i></a></li>
            </ul>
        </div>
    </div>
</nav>

            

        </>
    )
}

export default Header
