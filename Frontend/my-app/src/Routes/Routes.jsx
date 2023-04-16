
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
import { OrderPage } from '../Durgesh_Folder/Admin_Pages/OrderPage'
import CheckoutPage from '../Jagroshan/Pages/CheckoutPage'
import PaymentsPage from '../Jagroshan/Pages/PaymentsPage'
import SuccessPayment from '../Jagroshan/Pages/SuccessPayment'
import LoaderPage from '../Jagroshan/Pages/LoaderPage'
import { CartPageAdmin } from '../Durgesh_Folder/Admin_Pages/Cart'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHomePage />}></Route>

      <Route path="/adminPage" element={<MainAdminPage />}></Route>
      <Route path="/customerPageAdmin" element={<CustomerPage />}></Route>
      <Route path="/deltePageAdmin" element={<DeletePage />}></Route>
      <Route path="/addPageAdmin" element={<AddProduct />}></Route>
      <Route path="/orderPageAdmin" element={<OrderPage />}></Route>
      <Route path="/cartPageAdmin" element={<CartPageAdmin />}></Route>
      <Route path="/stat" element={<Stats />}></Route>

      
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/payment" element={<PaymentsPage/>}/>
      <Route path="/loader" element={<LoaderPage/>}/>
      <Route path="/successPayment" element={<SuccessPayment/>}/>
    </Routes>

  )
}


export  {AllRoutes}
