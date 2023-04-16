import { Box, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr , Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Sidebar } from '../Admin_Components/SliderAdmin'
import axios from 'axios'

const CartPageAdmin = () => {
    const [cartData , setCartData] = useState([])


    const getCartData = ()=>{
        axios.get(`${process.env.REACT_APP_URL}/cart/alluser` ,{
            headers:{
                authorization:JSON.parse(localStorage.getItem("token"))
            }
        })
        .then((res)=> setCartData(res.data))
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        getCartData()
    },[])

    const userImage = {
        female: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
        male: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnyqrxK4zSTIzWLbCQSBMxYgT2B4U0jv6JMJ-Aezj-kkKqSl7GShdy8jPY0HowqY6KibmsWomG6k&usqp=CAU&ec=48600112",
      };

    console.log(cartData ,"cartData")

  return (
    <Box>
       <Sidebar />
        <Box background="#171923" height="100vh">

            {/* Cart Details  STARTED FROM HERE --------------------- */}
            <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   red" height="auto" marginLeft="auto"  p="2%" mt="-60px">
             
            <Heading color="#fff" fontWeight="500">
            Cart Details  
          </Heading>

          {/*  table  */}
          <TableContainer color="#fff">
            <Table variant="simple" size="sm">
              <TableCaption placement="top" fontSize="22px" mb="15px">All Users Cart Data </TableCaption>
              <Thead>
                <Tr>
                <Th>Name</Th>
                 <Th>Photo</Th>
                  <Th>User Id</Th>
                  <Th>created At</Th>
                  <Th>updated At</Th>
                  <Th>ProductId</Th>
                  <Th>Price</Th>
                  <Th>quantity</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/*  Loop starts from here ------------------- */}

                {cartData?.length > 0 && 
                  cartData?.map((item, i) => {
                    // console.log(item.signUpTime.slice(0,16));
                    return (
                      <Tr key={i}>
                            <Td>
                          <Image
                            src={
                              item.userId.gender == "male"
                                ? userImage.male
                                : userImage.female
                            }
                            width="35px"
                            borderRadius="100%"
                            border="2px solid white"
                          />
                        </Td>
                        <Td textTransform="capitalize">{item.userId.name}</Td>
                        <Td>{item.userId._id}</Td>
                        <Td>{item.createdAt.slice(0,10)}</Td>
                        <Td>{item.updatedAt.slice(0,10)}</Td>
                        <Td>{item.productId._id}</Td>
                        <Td>{item.productId.price}</Td>
                        <Td>{item.quantity}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>

            </Box>
          </Box>
    </Box>
  )
}

export  {CartPageAdmin}
