import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { products } from "./_data";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProducts } from "../../Redux/Product_Reducer/action";
import { Pagination } from "./Pagination";


export const MainPanel = () => {
  const dispatch=useDispatch()
  const {product,isLoading}=useSelector((store)=>store.productReducer)
  // console.log(product)
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const pro=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]

  React.useEffect(() => {
    let order = searchParams.get("order");
    let price=searchParams.get("price")
    let objParams = {
      categories: searchParams.getAll("categories"),
      color: searchParams.getAll("color"),
      order: order,
      price: price
    };
    dispatch(getProducts(objParams))
  }, [location.search]);
  return (
    <div>
      <Box
        // px={{ base: "4", md: "8", lg: "12" }}
        // py={{ base: "6", md: "8", lg: "12" }}
        border="0px"
        p="16px"
      >
        
        <ProductGrid>
          {product?.map((product , i) => (
            <ProductCard key={i} product={product} isLoading={isLoading}/>
          ))}
        </ProductGrid>

         {/*  pagination ------------------ */}
       {product.length !== 0 &&   <Pagination />}
          

      </Box>
    </div>
  );
};