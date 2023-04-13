import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../Admin_Components/SliderAdmin'

const OrderPage = () => {
  return (
    <Box>
       <Sidebar />
        <Box background="#171923" height="100vh">

            {/* Order Details  STARTED FROM HERE --------------------- */}
            <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   red" height="auto" marginLeft="auto"  p="2%" mt="-60px">
             
            <Heading color="#fff" fontWeight="500">
            Customers
          </Heading>

            </Box>
          </Box>
    </Box>
  )
}

export  {OrderPage}
