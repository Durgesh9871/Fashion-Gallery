
import React from 'react'
import {Routes , Route} from "react-router-dom"
import { AddProduct } from '../Durgesh_Folder/Admin_Pages/AddProduct'
import { CustomerPage } from '../Durgesh_Folder/Admin_Pages/customerPage'
import { DeletePage } from '../Durgesh_Folder/Admin_Pages/DeletePage'
import { Stats } from '../Durgesh_Folder/Admin_Pages/stats'
import { MainAdminPage } from '../Durgesh_Folder/Pages/MainAdminPage'
import { MainHomePage } from '../Durgesh_Folder/Pages/MainHomePage' ; 
import { CartPage } from '../Jagroshan/Pages/CartPage'
import { ProductPage } from '../Jagroshan/Pages/ProductPage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHomePage />}></Route>
      <Route path="/adminPage" element={<MainAdminPage />}></Route>
      <Route path="/customerPageAdmin" element={<CustomerPage />}></Route>
      <Route path="/deltePageAdmin" element={<DeletePage />}></Route>
      <Route path="/addPageAdmin" element={<AddProduct />}></Route>
      <Route path="/editPageAdmin" element={<AddProduct />}></Route>
      <Route path="/stat" element={<Stats />}></Route>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>

  )
}


export  {AllRoutes}
