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
    <Box border="2px   red" width="50vw" justifyContent="space-between" display="flex">
    <Stack direction="row" spacing="5" width="full">
      <Box width="100px"  height="100px" padding="5px">
      <Image border="1px  grey"
        width="100%"
        height="100%"
        fit="cover"
        src={image}
        alt={name}
      />
      </Box>
      <Box pt="4" border="1px  grey" width="200px">
        <Stack spacing="0.5">
          <Text fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">{name}</Text>
          <Text fontSize='14px'  fontWeight="500" color="#727272" textAlign="left"   className='control'>
            {title}
          </Text>
        </Stack>
      </Box>
    </Stack>
    </Box>
  )
}