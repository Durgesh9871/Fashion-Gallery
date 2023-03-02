import React, { useEffect, useRef, useState } from 'react'
import { Box  , Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts"

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

  return (
    <>

  {/*  Main Admin Page Started from here ---------- */}
   <Box backgroundColor="#171923" border="2px   red" height="100%">
   <Sidebar />
     
  

     


      

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
