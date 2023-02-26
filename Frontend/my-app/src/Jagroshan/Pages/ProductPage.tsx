import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { MainPanel } from '../Components/MainPanel'
import { Pagination } from '../Components/Pagination'
import { SidePanel } from '../Components/SidePanel'

export const ProductPage = () => {
  return (
    <div>
      <HStack>
        <Box width={'20vw'} alignSelf={'start'} position={'sticky'} top={'10'}>
        <SidePanel/>      
        </Box>
        
        <Box width={'80vw'}>
        <MainPanel/>
        {/* <Pagination/> */}
        </Box>
      </HStack>
    </div>
  )
}
