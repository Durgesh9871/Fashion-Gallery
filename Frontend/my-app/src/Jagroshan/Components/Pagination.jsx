import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack , Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Pagination = () => {
  const [page , setPage] = useState(1)
  const [pageNext , setPageNext] = useState(false)
const [pagePre , setPagePre] = useState(false)
const [paginationData , setPaginationData] = useState([])


//  GET ALL DATA FOR PAGINATION FOR SETTING DISABLE BUTTON 
const PaginationFunction = ()=>{
  axios.get(`${process.env.REACT_APP_URL}/products`)
  .then((res)=> setPaginationData(res.data))
}

useEffect(()=>{
  PaginationFunction()
},[])
  
      
const handleNextPage = (data)=>{
  setPageNext(true)
  setPage(page+data)
  setTimeout(()=>{
    setPageNext(false)
  },400)
  
 }
 const handlePreviosPage = (data)=>{
  setPagePre(true)
  setPage(page+data)
  setTimeout(()=>{
    setPagePre(false)
  },400)
 }


 const nextPageDisable = Math.ceil(paginationData.length/9)


  return (
    <Box style={{display:"flex" }}  padding="60px 0px" justifyContent={{base:"center" , sm:"right" , md:"right" ,lg:"right" , xl:"right" , "2xl" :"right"}} >

    <Button colorScheme="telegram"  onClick={()=>handlePreviosPage(-1)} isLoading={pagePre} isDisabled={page==1}   ml="3"  pl={{base:"5px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} pr={{base:"10px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} > 
   <Text fontSize="22px" fontWeight="400"><ChevronLeftIcon fontSize="26px" ml="-8px" p="0"/>Prev</Text></Button>
    <Button ml="3" fontSize="22px" colorScheme="telegram" fontWeight="400"> {page} </Button>
    <Button colorScheme="telegram" onClick={()=>handleNextPage(1)} isLoading={pageNext} isDisabled={page == nextPageDisable}  ml="3" mr={{base:"0px", sm: "20px", md: "30px", lg: "30px",xl: "30px",'2xl': "30px"}} pl={{base:"10px", sm: "10px", md: "10px", lg: "10px",xl: "10px",'2xl': "10px"}} pr={{base:"5px", sm: "2px", md: "2px", lg: "2px",xl: "2px",'2xl': "2px"}}  > 
   <Text fontSize="22px" fontWeight="400">Next <ChevronRightIcon fontSize="26px" ml="-8px" p="0"/></Text> </Button>
 
  </Box>
  )
}
