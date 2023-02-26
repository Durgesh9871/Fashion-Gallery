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
} from '@chakra-ui/react'
import { Rating } from './Rating'
import { PriceTag } from './PriceTag'
// import { Product } from './_data'
import React from 'react'
import axios from 'axios'


export const ProductCard = (props) => {
  const cartRef=React.useRef(null)
  const { product } = props
  const { title, mainImage, realPrice, price, rating } = product

  const addToCart=()=>{
    if(cartRef.current)
    {
       cartRef.current.setAttribute("disabled", "disabled");
       cartRef.current.innerText='Added'
    }
    axios({
      method:'POST',
      url:`${process.env.REACT_APP_URL}/cart`,
      data:product
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <Stack spacing={{ base: '4', md: '5' }} border={'1px'} justifyContent={'space-between'}>
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
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {title}
          </Text>
          <PriceTag price={realPrice} salePrice={price} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          {/* <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            12 Reviews
          </Text> */}
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" ref={cartRef} width="full" onClick={()=>addToCart()}>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  )
}