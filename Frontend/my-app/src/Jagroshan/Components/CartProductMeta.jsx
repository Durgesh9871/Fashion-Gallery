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
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {title}
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}