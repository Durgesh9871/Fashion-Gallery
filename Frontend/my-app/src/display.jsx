import { Box } from '@chakra-ui/react'
import React from 'react'
import { DummyNavbar } from './Jagroshan/Components/DummyNavbar'
import { CartPage } from './Jagroshan/Pages/CartPage'
import { ProductPage } from './Jagroshan/Pages/ProductPage'
import { MainRoutes } from './MainRoutes'

const DisplayJavascript = () => {
  return (
    <div>
      <Box position={'sticky'} top={'0px'} zIndex={5} backgroundColor={'aqua'}>
      <DummyNavbar/>
      </Box>
      <MainRoutes/>
      {/* <ProductPage/> */}
      {/* <CartPage/> */}
    </div>
  )
}

export  {DisplayJavascript}
