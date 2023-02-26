import { Box, Heading , Img, Skeleton, SkeletonText, Text,useToast } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./ProductHeadings.css"
import Carousel from "better-react-carousel";
import { Link } from 'react-router-dom'
import {AiFillDelete, AiFillHeart} from "react-icons/ai" ;
import {FiHeart} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProductData } from '../../Redux/Laptop_reducer/action'






const DisplayProductMainData = ({ src ,uniqueId, name  ,price ,model , review ,realPrice ,isLaptopLoading ,mainImage , id})=>{
   
  
  let style = {
      position:"relative" , 
    
    }
 const [value , setValue] = useState(false)
    const [effect , setEffect] = useState(false)
    const [wishlistColor , setWishlistColor] = useState(false)
    


   
    //  here is carousel is started---------------------------------------------
    
    const handleChange = ()=>{
      setValue(1500)
      
} 
      
   useEffect(()=>{
    const id = setTimeout(()=>{
      setValue(false)
    },6500)
    return ()=>{
      clearTimeout(id)
    }
   },[value])

   const myDot = ({isActive})=>{
   return ( <span
    style={{
      display: 'inline-block',

      height : isActive ? "7.5px" :"6px" , 
      width: isActive ? "7px" :"6px " ,
      borderRadius:"50%" , 
      background: isActive ? "#266de8" :"#ccc" , 
    }}
  ></span> )
   }
   //  here is carousel is started---------------------------------------------
      
    

    //  here wishlist shown --------------------------------------------
const handleProductHover = ()=>{
  // console.log(effect)
  setEffect(true)
}
const closeProductHover = ()=>{
  // console.log(effect)
  setEffect(false)
}
// here wishlist remove----------------------------------------

    const dispatch = useDispatch()
    
    const handleDeleteProduct= (id)=>{
      console.log(id)
          dispatch(DeleteProductData(id))
    }
 



  const total = Math.floor(+(realPrice) * 100 )
  const spend = Math.floor(+(price) * 100 )
  const amount =  Math.floor((spend/total)*100)
  const ans = 100 - amount 

  
      
 return (
      

    <Box shadow="base" className='hoverProductDiv' w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"375px", sm: "375px", md: "385px", lg: "385px" ,xl: "385px",'2xl': "385px",}}  style={style} border="2px  red" >
      
      {/*  Corousel images are here --------------------------------------------------------- */}
     <Skeleton isLoaded={isLaptopLoading}    >
     <Link to={`/mens/${id}`}>   <div id='productDataImages' style={{ height:"auto",border:"1px  red" }} onMouseOver={handleChange}  >
        {/* <img src={src} alt={name}/> */}

        <Carousel hideArrow={true} loop={true} showDots={true} dot = {myDot}   autoplay={value} dotColorActive="#266de8" >
          {src.map((img,i) => (
            <Carousel.Item key={i}>
             
                <Img w="full" src={img.imageFront}  height="240px"  width="235px" margin="auto"/>
             
            </Carousel.Item>
          ))}
        </Carousel>

       </div> </Link>  
        </Skeleton>
       
       {/* corousel images ends here ----------------------------------------------------------- */}
       

       {/*  Products details are here ------------------- */}
       <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4'  isLoaded={isLaptopLoading} animation="none">
    <Box id='productDataDesc' position="absolute" bottom="20px" onMouseOut={closeProductHover} onMouseOver={handleProductHover}  style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px" ,cursor:'pointer'  }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
          
          {/*  wishlist on hover---------------------------------------- */}
    { effect && (<Box onClick={()=>handleDeleteProduct(id)}  style={{border:"2px solid #EBECEE" , width:"60%" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" , color:"#fff" }}>{wishlistColor ? <AiFillHeart color="red"  /> : <AiFillDelete /> } <Text ml={2}>Delete</Text> </Box> )}

      {/*  reviws star on hover ----------------------------------------------- */}
     {effect && <Box style={{display:"flex" ,justifyContent:"space-between" }}>
         <Box>
         <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{model}</Heading>
         </Box>

         </Box> }

         {/*  Ends here hover ------------------------------------ */}

       {!effect &&  <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{model}</Heading> }
        {!effect && <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{name}</Text> }
         
         <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
          </Box>
          
            
       </Box>
       </SkeletonText>
        
       
    </Box>
   
 )
}

export {DisplayProductMainData}