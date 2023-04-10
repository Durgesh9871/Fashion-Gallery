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
  useToast,Heading, SkeletonText 
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { PriceTag } from "./PriceTag";
// import { Product } from './_data'
import React, { useState } from "react";
import axios from "axios";
import {AiFillDelete, AiFillHeart} from "react-icons/ai" ;
import { BsFillCartFill } from "react-icons/bs";
import "./magnify.css"








export const ProductCard = ({product ,isLoading}) => {
  const [effect , setEffect] = useState(false)
  const [wishlistColor , setWishlistColor] = useState(false)

console.log(isLoading ,"isLoading" , product)
  const toast=useToast()

  const { title, mainImage, realPrice, price, rating, _id  , brand } = product;
  // const { title, mainImage, realPrice, price, rating, _id  , brand} = product;
  let token = JSON.parse(localStorage.getItem("token")) || null;

// console.log(props ,"props")

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
  }

//   price calculate ------------
const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 

  let style = {
    position:"relative" , 
  
  }

  // hover for adding in cart ------
  const handleProductHover = ()=>{
    // console.log(effect)
    setEffect(true)
  }

  const closeProductHover = ()=>{
    // console.log(effect)
    setEffect(false)
  }


  return (
    // <Stack
    //   spacing={{ base: "4", md: "5" }}
    //   border={"0px solid gray"}
    //   justifyContent={"space-between"}
    //   borderRadius={"5px"}
    //   boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
    // >
    //   <Box position="relative">
    //     <AspectRatio ratio={4 / 5}>
    //       <Image
    //         src={mainImage}
    //         alt={title}
    //         draggable="false"
    //         fallback={<Skeleton />}
    //         // borderRadius={{ base: 'md', md: 'xl' }}
    //       />
    //     </AspectRatio>
    //   </Box>
    //   <Stack paddingX={2}>
    //     <Stack spacing="1">
    //       <Text
    //         fontWeight="medium"
    //         color={useColorModeValue("gray.700", "gray.400")}
    //       >
    //         {title}
    //       </Text>
    //       <PriceTag price={realPrice} salePrice={price} currency="USD" />
    //     </Stack>
    //     <HStack>
    //       <Rating defaultValue={rating} size="sm" />
    //     </HStack>
    //   </Stack>


    //   {/*  add to cart button  */}
    //   <Stack align="center">
    //     <Button
    //       colorScheme="blue"
    //       width="full"
    //       onClick={() => addToCart()}
    //     >
    //       Add to cart
    //     </Button>
    //   </Stack>

        
    // </Stack>
     
      <Box border="2px  red" shadow="base" w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"375px", sm: "375px", md: "385px", lg: "385px" ,xl: "385px",'2xl': "385px",}} style={style}>

        {/* Image box -------------------- */}
        <Skeleton isLoaded={!isLoading}>  <Box className="image">
        <Image className="img" src={mainImage} alt={title} height="255px"  width="235px" margin="auto"  />
        </Box>
        </Skeleton>


        {/* product details  */}
        <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4'  isLoaded={!isLoading} animation="none">
        <Box id='productDataDesc' position="absolute" bottom="20px" onMouseOut={closeProductHover} onMouseOver={handleProductHover}  style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px" ,cursor:'pointer'  }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
        
        {/* on hover  */}
        { effect && (<Box   onClick={() => addToCart()}  style={{border:"2px solid #EBECEE" , width:"60%" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" , color:"#f75045"  }}> <BsFillCartFill /> <Text ml={2} fontWeight="500" >ADD TO CART</Text> </Box> )}
        
        {effect && <Box style={{display:"flex" ,justifyContent:"space-between" }}>
         <Box>
         {/* <Rating defaultValue={rating} size="sm" /> */}
         <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{brand}</Heading>
         </Box>

         </Box> }

         {/*  Ends here hover ------------------------------------ */}

        
         {!effect &&   <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{brand}</Heading> }
        {!effect && <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{title}</Text> }
         

          {/* price box --- */}
          <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
          </Box>
        </Box>
        </SkeletonText>
       
        {/* details end here ------------ */}
      </Box>

    


  );
};
