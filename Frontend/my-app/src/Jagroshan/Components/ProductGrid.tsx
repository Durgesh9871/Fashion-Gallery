import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

export const ProductGrid = (props: SimpleGridProps) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length
    return {
      base: Math.min(1, count),
      sm: Math.min(2,count),
      md: Math.min(2, count),
      lg: Math.min(3, count),
      xl: Math.min(3, count),
    }
  }, [props.children])

  return (
    <SimpleGrid border='0px' columns={columns}  columnGap={{ base: '4', md: '6' ,lg: "6",xl: "6",'2xl': "6"}}
     rowGap={{ base: '8', md: '10',lg: "10",xl: "10",'2xl': "10" }}
      {...props}
    />
  )
}