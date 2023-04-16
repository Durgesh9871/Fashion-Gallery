import React, { useEffect, useRef, useState } from 'react'
import { Box  , Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts"
import { AiFillCaretRight } from 'react-icons/ai'

const MainAdminPage = () => {
  let activeCount = 0 


  const dispatch = useDispatch() 

  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
},shallowEqual )   
 
if(customerData.length > 0 ){
  for(var i=0 ; i<customerData.length ; i++){
        if(customerData[i].active == "true"){
          activeCount++
        }
  }
}



useEffect(()=>{
   dispatch(getCustomerData)
},[])

//  style ==
const style={
color:"white" ,textAlign:"center"  , fontSize:"28px" , fontWeight:"500" 
}

const secondStyle={
 color:"greenyellow" ,textAlign:"center" , fontSize:"28px" , fontWeight:"500" 
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
       <Text textAlign="center" fontWeight={500} color="black" fontSize="38px">$ 500</Text>
   </Box>

{/*  All four details boxes ------------------------------------ */}
   <Box border="1px  red" display="flex" justifyContent="space-between" mt="30px">

{/*  for customers --- first box  */}
    <Box border="1px solid  white"  background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px"> 
    <Text style={style}>Customers</Text> 
    <Text style={secondStyle}>34</Text> 

      <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
  <Link to="/customerPageAdmin">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
      <Text style={view}>View Details</Text>
      <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
    </Box> </Link>

    </Box>

{/* for update products ------------- second box --- */}
    <Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
     
    <Text style={style}>Update Products</Text> 
    <Text style={secondStyle}>34</Text> 

      <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
    <Box display="flex" justifyContent="space-between" alignItems="center" >
   
    {/* for adding products  */}
    <Link to="/addPageAdmin"> <Box display="flex" alignItems="center" cursor="pointer">
      <Text fontSize="18px" color="lightgreen">Add</Text>
      <AiFillCaretRight style={{color:"lightgreen"  , fontSize:"20px"}} />
      </Box></Link>


       {/* for Delete products  */}
       <Link to="/deltePageAdmin"><Box display="flex" alignItems="center" cursor="pointer">
      <Text fontSize="18px" color="red">Delete</Text>
      <AiFillCaretRight style={{color:"red"  , fontSize:"20px"}} />
      </Box></Link>

    </Box> 

    </Box>



{/*  order  one --------------------- */}
    <Box border="1px solid white" background="#2e2e2e" height="170px" width="280px" padding="10px" borderRadius="10px" >
  
    <Text style={style}>Order Details</Text> 
    <Text style={secondStyle}>& Status...</Text> 

      <Divider orientation='horizontal' style={{margin:"10px 0px" }}  />
  <Link to="/stat">  <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
      <Text style={view}>View Details</Text>
      <AiFillCaretRight style={{color:"#ffff"  , fontSize:"20px"}} />
    </Box> </Link>

    </Box>
   {/* four box end here ------- */}


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
