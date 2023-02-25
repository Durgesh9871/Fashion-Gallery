import { Box } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { products } from "./_data";
import axios from "axios";

export const MainPanel = () => {
  const [pro,setproducts]=React.useState(0)
  // console.log(products)
  // console.log(pro)
  // console.log(process.env.REACT_APP_URL)
  React.useEffect(()=>{
    axios({
      method:'GET',
      url:process.env.REACT_APP_URL
    })
    .then((res)=>setproducts(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <Box
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
        border="1px"
      >
        <ProductGrid>
          {products.map((product:any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    </div>
  );
};
