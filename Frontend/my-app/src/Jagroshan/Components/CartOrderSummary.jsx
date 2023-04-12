import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { formatPrice } from './PriceTag'
import { AiFillCaretRight } from 'react-icons/ai'




const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="500" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = ({total}) => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full" shadow="md">
      <Heading fontSize="22px" fontWeight="600" color="#303030" >Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
        <OrderSummaryItem label="Shipping + Tax"  >
          Free
        </OrderSummaryItem>
        <OrderSummaryItem label="Discount">
          {total==0?'$0':'$4'}
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text   fontSize="20px" fontWeight="700" color="#303030">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="700">
            {total==0?formatPrice(total):formatPrice(total-4)}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="blue" size="lg" fontSize="18px" rightIcon={<AiFillCaretRight style={{color:"ffff" , fontSize:"18px"}} /> }  >
        Checkout
      </Button>
    </Stack>
  )
}