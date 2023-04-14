import { Box, Center, Spinner, Heading, VStack, Text, Flex, Button, useToast, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CloseIcon } from '@chakra-ui/icons';
import Alert from "../Components/Alert";
import {Link} from 'react-router-dom'
import SuccessPayment from "./SuccessPayment";

function Loader(){
    return(
        <VStack spacing={5}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <Heading>Just hang on...</Heading>
                <Heading>We are almost done</Heading>
            </VStack>
    )
}

export default function LoaderPage() {
    
    let [flag,setflag]=useState(false)
    const toast = useToast()
    let alertdata={
        title: ' Payment Successful',
        description: "Thank you for availing our services",
        status: 'success',
      }
   
        setTimeout(() => {
          setflag(true)
          }, 4000)
      
    
    
    return <>
        <Center h='800px'>
            {flag?<SuccessPayment/>:<Loader/>}           
        </Center>

        
    </>
}