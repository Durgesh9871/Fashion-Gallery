import { Box, Divider, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { MainPanel } from "../Components/MainPanel";
import { Pagination } from "../Components/Pagination";
import { SidePanel } from "../Components/SidePanel";
import Footer from "../../footer/Footer";

export const ProductPage = () => {
  return (
    <Box>
    <Box style={{display:"flex" , justifyContent:"space-between"}}    p="10px"  mb="30px">
      {/* <HStack> */}
        <Box
           width={{base:"20vw",sm: "35vw" , md:"20vw" ,lg: "20vw",xl: "20vw",'2xl': "20vw"}}
          alignSelf={"start"}
          position={"sticky"}
          top={"17vh"}
          height=""
          // borderRight={"1px"}
          display={{base:"none",sm:"block" , md:"block"}}
          border="2px solid #f0f2f5"
          borderRadius="8px"
          shadow="md"
          background="#ffff"
          p="14px"
        >
          <SidePanel />
        </Box>

        <Box width={{base:"100vw",sm: "57vw" , md:"70vw" ,lg: "75vw",xl: "75vw",'2xl': "75vw"}}  border="2px solid  #f0f2f5"   mt="20px"
          background="#ffff">
          <MainPanel />
          {/* <Pagination/> */}
        </Box>
      {/* </HStack> */}
    </Box>
      <Footer />
      </Box>
  );
};
