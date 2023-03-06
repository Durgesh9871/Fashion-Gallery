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
  let { productId, settotal } = props;

  const [pro, setpro] = React.useState([]);
  const { brand, title, mainImage, price } = pro;
  // console.log(price)

  const onClickDelete = () => {
    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/carts/delete/${productId}`,
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
        // settotal((pre)=>pre-price)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/products/findit`,
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
        productId,
      },
    })
      .then((res) => {
        setpro(res.data);
        settotal((pre) => pre + res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <Button colorScheme={"red"} onClick={onClickDelete} size={"xs"}>
          Delete
        </Button>
        <PriceTag price={price} />
      </Flex>
    </Flex>
  );
};
