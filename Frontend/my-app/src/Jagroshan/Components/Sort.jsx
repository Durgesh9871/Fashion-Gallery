import { Box, Heading , Text } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Sort = ({setOrder,orderval}) => {
    const handleRadio=(e)=>{
         setOrder(e.target.value)
    }
    return (
        <Box>
            <Text size={'sm'} marginBottom={1} fontSize="17px" fontWeight="500" mt="15px" color="#3b464c">Sort</Text>
            <div onChange={handleRadio} style={{paddingLeft:'13px'}}>
                <input type='radio' name='sort' value="asc" defaultChecked={orderval=='asc'}/>
                <label style={{color:"#646878"}} > Low to High</label>
                <br/>
                <input type='radio' name='sort' value="desc" defaultChecked={orderval=='desc'}/>
                <label style={{color:"#646878"}}> High to Low</label>
            </div>
        </Box>
    )
}