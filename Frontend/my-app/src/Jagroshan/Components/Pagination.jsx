import { Box, Button, Heading, HStack } from '@chakra-ui/react'
import React from 'react'

export const Pagination = () => {
  const [page,setpage]=React.useState(1)
  return (
    <div>
      <HStack justifyContent={'center'}>
        <Button onClick={()=>setpage((next)=>next-1)} isDisabled={page==0?true:false}>Prev</Button>
        <Heading size={'sm'}>{page}</Heading>
        <Button onClick={()=>setpage((next)=>next+1)}>Next</Button>
      </HStack>
    </div>
  )
}
