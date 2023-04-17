import React, { useEffect, useRef, useState } from 'react'
import { Box  , Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts"
import { AiFillCaretRight } from 'react-icons/ai'
import axios from 'axios'




const MainAdminPage = () => {
  const [cartData , setCartData] = useState([])
  const [productsData , setProductData] = useState([])



  // for all cart data
  const getCartData = ()=>{
      axios.get(`${process.env.REACT_APP_URL}/cart/alluser` ,{
          headers:{
              authorization:JSON.parse(localStorage.getItem("token"))
          }
      })
      .then((res)=> setCartData(res.data))
      .catch((err)=> console.log(err))
  }

   // for all product data
   const getProductData = ()=>{
    axios.get(`${process.env.REACT_APP_URL}/products` ,{
        headers:{
            authorization:JSON.parse(localStorage.getItem("token"))
        }
    })
    .then((res)=> setProductData(res.data))
    .catch((err)=> console.log(err))
}


  //  for customer data ------------------------
  const dispatch = useDispatch() 
  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
})  



  useEffect(()=>{
      getCartData()
      getProductData()
  },[])

  
 


useEffect(()=>{
   dispatch(getCustomerData)
},[])

//  style ==
const style={
color:"white" ,textAlign:"center"  , fontSize:"28px" , fontWeight:"500" 
}

const secondStyle={
 color:"greenyellow" ,textAlign:"center" , fontSize:"22px" , fontWeight:"500"  , marginBottom:"30px"
}

const view = {
  color:"#ffffff" , fontSize:"18px"
}

  return (
    <>

  {/*  Main Admin Page Started from here ---------- */}
   <Sidebar />
   <Box backgroundColor="#171923" border="2px   red" height="100vh">
       
       {/*  Started from here ------- */}
   <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   white" height="500px" marginLeft="auto" padding="20px" mt="-60px" >
     <Text color="#ffffff" textAlign="center" fontSize="29px" fontWeight={500} >Admin <span style={{color:"greenyellow"}}>Dashboard</span></Text>
   
   <Box background="#2e2e2e" width="100%" height="150px" mt="30px" p="10px" border="1px  white" borderRadius="10px" >
    <Text textAlign="center" fontWeight={500} color="greenyellow" fontSize="40px" >Total Sale</Text>
       <Text textAlign="center" fontWeight={400} color="#ffffff" fontSize="38px">$ 500</Text>
   </Box>

{/*  All four details boxes ------------------------------------ */}
   <Box border="1px  red" display="flex" justifyContent="space-between" mt="30px">

{/*  for customers --- first box  */}
    <Box border="1px solid  white"  background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px"> 
    <Text style={style}>Customers</Text> 
    <Text style={secondStyle}>Users - 34</Text> 

      <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
  <Link to="/customerPageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
      <Text style={view}>View Details</Text>
      <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
    </Box> </Link>

    </Box>


{/* Box for adding product */}
    <Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
  
  <Text style={style}>Add Product</Text> 
  <Text style={secondStyle}>Products - {productsData.length}</Text> 

    <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
<Link to="/addPageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
    <Text style={view}>View Details</Text>
    <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
  </Box> </Link>

  </Box>
  {/* add end */}


{/* box for deleting product */}
<Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
  
  <Text style={style}>Delete Product</Text> 
  <Text style={secondStyle}>Products - {productsData.length}</Text> 

    <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
<Link to="/deltePageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
    <Text style={view}>View Details</Text>
    <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
  </Box> </Link>

  </Box>
  {/* del end */}



{/*  cart  one --------------------- */}
<Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
  
  <Text style={style}>Cart Details</Text> 
  <Text style={secondStyle}>Items - {cartData.length}</Text> 

    <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
<Link to="/cartPageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
    <Text style={view}>View Details</Text>
    <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
  </Box> </Link>

  </Box>
 {/* third box end here ------- */}



   
    

   </Box>


   {/* Four box end here first line ------ */}
   {/*  second line box --- */}

   <Box  border="1px  red" display="flex" justifyContent="" mt="30px" >


    {/*  order  one --------------------- */}
    <Box border="1px solid white" mr="22px" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
  
    <Text style={style}>Order Details</Text> 
    <Text style={secondStyle}>& Status...</Text> 

      <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
  <Link to="/orderPageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
      <Text style={view}>View Details</Text>
      <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
    </Box> </Link>

    </Box>
   {/* order box end here ------- */}


      {/*  for statistic --------------------- */}
      <Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
      
      <Text style={style}>Statistics</Text> 
      <Text style={secondStyle}>...</Text> 
  
        <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
    <Link to="/stat">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
        <Text style={view}>View Details</Text>
        <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
      </Box> </Link>
  
      </Box>

      {/* stats end here ---------------- */}
   </Box>
  
     
   </Box>

      

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
