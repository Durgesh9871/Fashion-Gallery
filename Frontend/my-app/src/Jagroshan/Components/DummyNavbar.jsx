import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

export const DummyNavbar = () => {
    const navigate=useNavigate()
  return (
    <div>
        <HStack border={'1px'} justifyContent={'space-between'}>
            <Button onClick={()=> navigate('/products')}>ProductPage</Button>
            <Button onClick={()=>navigate('/cart')}>Cart</Button>
        </HStack>
    </div>
  )
}
