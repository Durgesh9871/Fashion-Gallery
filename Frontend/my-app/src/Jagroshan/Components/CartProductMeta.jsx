import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'

export const CartProductMeta = (props) => {
  const {image, name, title } = props
  return (
    <Box border="2px solid red" width="50vw" justifyContent="space-between" display="flex">
    <Stack direction="row" spacing="5" width="full">
      <Box width="110px"  height="100px" padding="5px">
      <Image border="1px solid grey"
        width="100%"
        height="100%"
        fit="cover"
        src={image}
        alt={name}
      />
      </Box>
      <Box pt="4" border="1px solid grey">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm" className='control'>
            {title}
          </Text>
        </Stack>
      </Box>
    </Stack>
    </Box>
  )
}