import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { CartPage } from './Jagroshan/Pages/CartPage';
import { HomePage } from './Jagroshan/Pages/HomePage';
import { ProductPage } from './Jagroshan/Pages/ProductPage';

export const MainRoutes = () => {
  return (
    // <div>MainRoutes</div>
    <Routes>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="*" elemtent={<h3>Page Not Found</h3>}/>
    </Routes> 
  );
}
