import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { ProductPage } from './Jagroshan/Pages/ProductPage'
import { MainHomePage } from './Durgesh_Folder/Pages/MainHomePage'
// import { CartPage } from './Jagroshan/Pages/CartPage'
// import { ProductPage } from './Jagroshan/Pages/ProductPage'
import { AllRoutes } from './Routes/Routes'

const DisplayJavascript = () => {
  return (
    <div>
      {/* <ProductPage/> */}
      {/* <Navbar/> */}
      {/* <CartPage/> */}


      {/*  Durgesh -code--- */}
      <AllRoutes />
      
    </div>
  )
}

export  {DisplayJavascript}
