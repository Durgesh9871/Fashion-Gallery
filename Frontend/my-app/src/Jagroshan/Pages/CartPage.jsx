import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  VStack, Text
} from "@chakra-ui/react";
// import { cartData } from '../Components/_data'
import { CartItem } from "../Components/CartItem";
import { CartOrderSummary } from "../Components/CartOrderSummary";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/Cart_Reducer/action";

export const CartPage = () => {
  const [total, settotal] = React.useState(0);
  const [trigger,settrigger]=React.useState(true)

  
  // durgesh code -------

  const {cartData} = useSelector((state)=>{
    return {
      cartData:state.CartReducer.cartData
    }
  })
    // console.log('cartData' ,cartData)

   const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(getCartData)
   },[])

  
  return (
    <div>
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Text fontSize="24px" fontWeight="500" color="#646878">
              Shopping Cart
            </Text>

            <Stack spacing="6" border="2px  grey" padding="10px" shadow="md" width={{base:"90%" , sm:"90vw" ,md:"76vw",lg:"60vw",xl:"46vw" , "2xl":"46vw"}}>
              { cartData[0] == "N"  && (
                <Box
                  border={"0px"}
                  height={"50vh"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  // border="2px solid red"
                >
                  <VStack>
                    <Heading size={"md"}>Your Cart is Empty</Heading>
                    <Link to="/products" color={mode("blue.500", "blue.200")}>
                      Try latest trends
                    </Link>
                  </VStack>
                </Box>
              ) }

           { (cartData[0] !== "N"  && 
                cartData?.map((item,index)=>
                <CartItem key={index} {...item} settrigger={settrigger} />
                )
              )
              }
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary total={total} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/products">  <Text color="#4e93f5" fontSize='15px'  fontWeight="500" > Continue shopping</Text> </Link>
                
            
            </HStack>
          </Flex>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};
