import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { MainPanel } from '../Components/MainPanel'
import { SidePanel } from '../Components/SidePanel'

export const ProductPage = () => {
  return (
    <div>
      <HStack>
        {/* <SidePanel/> */}
        <MainPanel/>
      </HStack>
    </div>
  )
}
