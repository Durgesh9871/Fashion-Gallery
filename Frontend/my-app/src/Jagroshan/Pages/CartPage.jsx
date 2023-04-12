import React from "react";
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

export const CartPage = () => {
  const [cdata, setcdata] = React.useState([]);
  // console.log(cdata)
  const [total, settotal] = React.useState(0);
  // console.log(total)
  const [trigger,settrigger]=React.useState(true)
  // console.log(trigger)
  React.useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/carts/usercart`,
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) =>{ 
        setcdata([])
        settotal(0)
        if(res.data!='No items in your cart')
        {
        res.data.map((each)=>{
          axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}/products/findit`,
            headers: {
              authorization: JSON.parse(localStorage.getItem("token")),
              productId:each.productId,
            },
          })
            .then((res) => {
              setcdata((prev)=>[...prev,res.data])
              settotal((pre) => pre + res.data.price);
            })
            .catch((err) => console.log(err));
        })
      }
      })
      .catch((err) => console.log(err));
  }, [trigger]);
  
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

            <Stack spacing="6" border="2px  grey" padding="10px" shadow="md" width={{base:"46vw"}}>
              {cdata.length==0 ? (
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
              ) : 
              (
                cdata.map((item,index)=>
                <CartItem key={index} {...item} settrigger={settrigger}/>
                )
              )
              }
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary total={total} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/products" color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};
