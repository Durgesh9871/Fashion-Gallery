import { Box } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { products } from "./_data";

export const MainPanel = () => {
  return (
    <div>
      <Box
        // maxW="7xl"
        // mx="auto"
        // width={'100vw'}
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
        border="1px"
      >
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    </div>
  );
};
