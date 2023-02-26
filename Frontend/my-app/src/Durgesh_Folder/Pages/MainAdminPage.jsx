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
     
   <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px  red" height="auto" marginLeft="auto" p="50px 0px" display="flex" justifyContent="space-evenly"  >
     {/* <Text color="#fff" fontSize="20px">Total Users : {customerData.length} </Text> */}
         {/* Cart- 100      
          users - [ududu ] */}
          {/* orderOverall - [ product-123 , id-jdbhdh  , price 2]  */}
      
     <Chart type="pie" width="450px"  height="400px"  series={[customerData.length-activeCount , activeCount]  }  options ={{
      title:{text:"Active User Data"} ,
     

      noData:{text:"Empty"} ,

      labels:["Not Active User" , "Active User"]
     }}>

     </Chart>

    {/*  SECond chart ------- */}
     
    <Chart type="bar" width="450px"  height="400px" options={{ 
       xaxis:{
              categories:["Active-user" , "Not-Active" ]
            }}}

            series={[{
                name: 'Users Not Active',
                data: [ customerData.length-activeCount ],
                color:"#ec4b6b" , 
               
            },{
                name: 'Active User',
                data: [activeCount ,]
            }
          ]}

              
    >   </Chart>
     
   </Box>

     {/*  ORDER DETAILS ------------------------------- */}
     <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px  red" height="auto" marginLeft="auto" p="50px 0px" >
       <Text color="#fff" textAlign="center" fontSize="25px" mb="55px">Order Details</Text>
       
       {/*  Chart start from here ----order ----  BAR GRAPH ---------------*/}
         <Box display="flex" justifyContent="space-evenly">

         <Chart type="bar" width="450px"  height="400px" options={{ 
       xaxis:{
              categories:["Total Order" , "Active User" ]
            },
           title:{text:"Total order we have from active users"} ,
          }}

            series={[{
                name: 'Total Order',
                data: [ 10 ],
                
               
            },{
                name: 'Active User',
                data: [activeCount ]
            }
          ]}

          >   </Chart>


          {/*  Second */}
          <Chart type="pie" width="450px"  height="400px"  series={[10 , activeCount]  }  options ={{
      title:{text:"Data"} ,
     

      noData:{text:"Empty"} ,

      labels:["Total Orders" , "Active User"]
     }}>

     </Chart>
              

          </Box> 
    
      </Box>



       {/*  CART DETAILS ------------------------------- */}
     <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px  red" height="auto" marginLeft="auto" p="50px 0px" >
       <Text color="#fff" textAlign="center" fontSize="25px" mb="55px">Cart Details</Text>
       
       {/*  Chart start from here ----order ----  BAR GRAPH ---------------*/}
         <Box display="flex" justifyContent="space-evenly">

        
          <Chart type="pie" width="450px"  height="400px"  series={[10 , 8]  }  options ={{
      title:{text:"Total Cart Data"} ,
     

      noData:{text:"Empty"} ,

      labels:["Total Cart Items" , "Total User"]
     }}>

     </Chart>

     {/* Second --- */}
     <Chart type="bar" width="450px"  height="400px" options={{ 
       xaxis:{
              categories:["Total Cart Item" , "Total User" ]
            },
           title:{text:"Total Items Present In cart "} ,
          }}

            series={[{
                name: 'Total Cart Items',
                data: [ 10 ],
                
               
            },{
                name: 'Total User',
                data: [8 ]
            }
          ]}

          >   </Chart>

          </Box> 
    
      </Box>

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
