import { Box, Divider, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { MainPanel } from "../Components/MainPanel";
import { Pagination } from "../Components/Pagination";
import { SidePanel } from "../Components/SidePanel";

export const ProductPage = () => {
  return (
    <div>
      <HStack>
        <Box
          width={"20vw"}
          alignSelf={"start"}
          position={"sticky"}
          top={"15vh"}
          borderRight={"1px"}
          display={{base:"none",md:"block"}}
        >
          <SidePanel />
        </Box>

        <Box width={{base:"100vw",md:"80vw"}}>
          <MainPanel />
          {/* <Pagination/> */}
        </Box>
      </HStack>
    </div>
  );
};
