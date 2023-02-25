import {
  Checkbox,
  Container,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PriceSlider from "./PriceSlider";

export const SidePanel = () => {
  const [value, setValue] = React.useState("1");
  const [price, setprice] = React.useState("2000");
  return (
    <div>
      <VStack border={'1px'} alignItems={'start'} paddingX={'3'}>
        {/* <RadioGroup onChange={setValue} value={value}>
          <Text>Categories</Text>
          <VStack alignItems={'start'}>
            <Radio value="shirts">Shirt</Radio>
            <Radio value="jacket">Jacket</Radio>
            <Radio value="coatpant">Coat-Pant</Radio>
            <Radio value="tshirts">T-Shirt</Radio>
          </VStack>
        </RadioGroup> */}

        <Text>Categories</Text>
        <Checkbox>Shirt</Checkbox>
        <Checkbox>Jacket</Checkbox>
        <Checkbox>Coat-Pant</Checkbox>
        <Checkbox>T-Shirt</Checkbox>

        <Text>Price</Text>
        <Container flexDirection={"row"}>
          <PriceSlider setprice={setprice} />
        </Container>

        <Text>Color</Text>
        <Checkbox>Black</Checkbox>
        <Checkbox>Blue</Checkbox>
        <Checkbox>Grey</Checkbox>
        <Checkbox>White</Checkbox>
        <Checkbox>Red</Checkbox>
      </VStack>
    </div>
  );
};
