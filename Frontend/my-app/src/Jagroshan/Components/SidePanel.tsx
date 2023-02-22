import { Checkbox, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const SidePanel = () => {
  const [value, setValue] = React.useState('1')
  return (
    <div>
      <VStack>
        <RadioGroup onChange={setValue} value={value}>
          <Text>Categories</Text>
          <VStack>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </VStack>
        </RadioGroup>
        <Text>Rating</Text>
        <Checkbox>Checkbox</Checkbox>
        <Checkbox>Checkbox</Checkbox>
      </VStack>
    </div>
  );
};
