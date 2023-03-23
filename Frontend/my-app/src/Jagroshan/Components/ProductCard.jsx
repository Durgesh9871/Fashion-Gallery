import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { PriceTag } from "./PriceTag";
// import { Product } from './_data'
import React from "react";
import axios from "axios";

export const ProductCard = (props) => {
  const toast=useToast()
  const { product } = props;
  const { title, mainImage, realPrice, price, rating, _id } = product;
  let token = JSON.parse(localStorage.getItem("token")) || null;

  const addToCart = () => {
    if(token)
    {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/carts/add`,
      data: {productId:_id,userId:JSON.parse(localStorage.getItem('token'))},
      headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
      }
    })
      .then((res) => toast({
        position: "top",
        title: res.data?"Item added to cart":"Item already present in the cart",
        status: res.data?"success":"warning",
        duration: 3000,
        isClosable: true,
      }))
      .catch((err) => console.log(err));
    }
    else
    {
      toast({
        position: "top",
        title: "Kindly Sign-In/Sign-UP first",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
    }
  };
  return (
    <Stack
      spacing={{ base: "4", md: "5" }}
      border={"0px solid gray"}
      justifyContent={"space-between"}
      borderRadius={"5px"}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 5}>
          <Image
            src={mainImage}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            // borderRadius={{ base: 'md', md: 'xl' }}
          />
        </AspectRatio>
      </Box>
      <Stack paddingX={2}>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title}
          </Text>
          <PriceTag price={realPrice} salePrice={price} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
        </HStack>
      </Stack>
      <Stack align="center">
        <Button
          colorScheme="blue"
          width="full"
          onClick={() => addToCart()}
        >
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
