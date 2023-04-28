import React from 'react'
import { ProductPage } from './Jagroshan/Pages/ProductPage'
import { MainHomePage } from './Durgesh_Folder/Pages/MainHomePage'
// import { CartPage } from './Jagroshan/Pages/CartPage'
// import { ProductPage } from './Jagroshan/Pages/ProductPage'
import { AllRoutes } from './Routes/Routes'
import MainNavbar from './Navbar/Navbar'

const DisplayJavascript = () => {
  return (
    <div>
      {/* <ProductPage/> */}
      {/* <Navbar/> */}
      {/* <CartPage/> */}
      <MainNavbar  />
    
      {/*  Durgesh -code--- */}
      <AllRoutes />
      
    </div>
  )
}

export  {DisplayJavascript}
