import React from 'react'
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
// import { cartData } from '../Components/_data'
import { CartItem } from '../Components/CartItem'
import { CartOrderSummary } from '../Components/CartOrderSummary'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const CartPage = () => {

  const [cartdata,setcartdata]=React.useState([])
  const [total,settotal]=React.useState(0)
  // console.log(total)
  React.useEffect(()=>{
    axios({
      method:'GET',
      url:`${process.env.REACT_APP_URL}/carts/usercart`,
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    })
    .then(res=>setcartdata(res.data))
    .catch(err=>console.log(err))

    // console.log(total)
  },[cartdata])
  // console.log(cartdata)
  return (
    <div>
        <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
      <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart
        </Heading>

        <Stack spacing="6">
          {cartdata?.map((item,index) => (
            <CartItem key={index} {...item} settotal={settotal}/>
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary total={total}/>
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link href='/products' color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
    </div>
  )
}
