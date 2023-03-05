import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sort = ({setOrder,orderval}) => {
    const handleRadio=(e)=>{
         setOrder(e.target.value)
    }
    return (
        <Box>
            <Heading size={'sm'} marginBottom={1}>Sort</Heading>
            <div onChange={handleRadio} style={{paddingLeft:'13px'}}>
                <input type='radio' name='sort' value="asc" defaultChecked={orderval=='asc'}/>
                <label> Low to High</label>
                <br/>
                <input type='radio' name='sort' value="desc" defaultChecked={orderval=='desc'}/>
                <label> High to Low</label>
            </div>
        </Box>
    )
}