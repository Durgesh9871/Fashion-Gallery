import {
  Button,
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import axios from "axios";
import React from "react";

export const CartItem = (props) => {
  const toast = useToast();
  // console.log(props)
  let { brand, title, mainImage, price, _id, settrigger } = props;

  const onClickDelete = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/carts/delete/${_id}`,
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => {
        toast({
          position: "top",
          title: "Item removed from cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        settrigger(false)
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex borderBottom="2px solid #f5f7fa" p="10px" 
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={brand} title={title} image={mainImage} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        
        <PriceTag price={price} />
        <CloseButton
          aria-label={`Delete ${brand} from cart`}
          onClick={()=>onClickDelete()}
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
        <Button colorScheme={"red"} onClick={()=>onClickDelete()} size={"xs"}>
          Delete
        </Button>
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};
