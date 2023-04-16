import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Admin_Components/SliderAdmin'
import axios from 'axios'

const CartPageAdmin = () => {
    const [cartData , setCartData] = useState([])


    const getCartData = ()=>{
        axios.get(`${process.env.REACT_APP_URL}/cart/alluser` ,{
            headers:{
                authorization:JSON.parse(localStorage.getItem("token"))
            }
        })
        .then((res)=> setCartData(res.data))
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        getCartData()
    },[])
    console.log(cartData ,"cartData")

  return (
    <Box>
       <Sidebar />
        <Box background="#171923" height="100vh">

            {/* Cart Details  STARTED FROM HERE --------------------- */}
            <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   red" height="auto" marginLeft="auto"  p="2%" mt="-60px">
             
            <Heading color="#fff" fontWeight="500">
            Cart Details 
          </Heading>

            </Box>
          </Box>
    </Box>
  )
}

export  {CartPageAdmin}
