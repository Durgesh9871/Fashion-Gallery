import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import axios from "axios";
import React from "react";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem = (props) => {
  // console.log(props)
  let {
    productId,
    settotal
  } = props;

  const [pro,setpro]=React.useState([])
  const {brand,title,mainImage,price}=pro
  // console.log(price)
  const onChangeQuantity=()=>{

  }

  const onClickDelete=()=>{

  }

  React.useEffect(()=>{
    axios({
      method:'GET',
      url:`${process.env.REACT_APP_URL}/products/findit`,
      headers:{
        authorization:JSON.parse(localStorage.getItem('token')),
        productId
      }
    })
    .then(res=>{setpro(res.data); settotal(pre=>pre+res.data.price)})
    .catch(err=>console.log(err))
  },[])

  // console.log(pro)
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={brand}
        title={title}
        image={mainImage}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <PriceTag price={price} />
        <CloseButton
          aria-label={`Delete ${brand} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};
