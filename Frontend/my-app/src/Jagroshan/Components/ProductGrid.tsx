import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

export const ProductGrid = (props: SimpleGridProps) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length
    return {
      base: Math.min(1, count),
      sm: Math.min(1,count),
      md: Math.min(2, count),
      lg: Math.min(3, count),
      xl: Math.min(3, count),
    }
  }, [props.children])

  return (
    <SimpleGrid border='0px' columns={columns}  columnGap={{ base: '4', md: '6' ,lg: "6",xl: "6",'2xl': "6"}}
     rowGap={{ base: '45px', md: '45px',lg: "45px",xl: "45px",'2xl': "45px" }}
      {...props}
    />
  )
}