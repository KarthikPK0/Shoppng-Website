import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'




function App() {


  return (
    <>
     <Header/> 
    <Routes>
      <Route path='/' element={<Home />} > </Route>
      <Route path='/shop' element={<Shop />} > </Route>
      <Route path='/gallery' element={<Gallery />} > </Route>
      <Route path='/cart' element={<Cart />} > </Route>
      <Route path='/id/productdetails' element={<ProductDetails />} > </Route>
    </Routes>
     <Footer/>
  
   
    </>
  )
}

export default App
