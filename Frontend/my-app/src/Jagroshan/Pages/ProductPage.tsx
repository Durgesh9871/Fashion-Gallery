import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { MainPanel } from '../Components/MainPanel'
import { SidePanel } from '../Components/SidePanel'

export const ProductPage = () => {
  return (
    <div>
      <HStack>
        <Box width={'25vw'}>
        <SidePanel/>
        </Box>
        <Box width={'75vw'}>
        <MainPanel/>
        </Box>
      </HStack>
    </div>
  )
}
