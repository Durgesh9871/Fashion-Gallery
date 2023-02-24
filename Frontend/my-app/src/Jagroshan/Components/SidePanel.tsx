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
        <RadioGroup onChange={setValue} value={value}>
          <Text>Categories</Text>
          <VStack alignItems={'start'}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </VStack>
        </RadioGroup>
        <Text>Rating</Text>
        <Checkbox>Checkbox</Checkbox>
        <Checkbox>Checkbox</Checkbox>

        <Text>Price</Text>
        <Container flexDirection={"row"}>
          <PriceSlider setprice={setprice} />
        </Container>
      </VStack>
    </div>
  );
};
