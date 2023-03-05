import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { products } from "./_data";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProducts } from "../../Redux/Product_Reducer/action";


export const MainPanel = () => {
  const dispatch=useDispatch()
  const {product,isLoading}=useSelector((store)=>store.productReducer)
  const [searchParams] = useSearchParams();
  const location = useLocation();

  React.useEffect(() => {
    // console.log(searchParams.get('price'))
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
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
        border="0px"
      >
        {isLoading?<ProductGrid>
          {product?.map((product , i) => (
            <Skeleton><ProductCard key={i} product={product} /></Skeleton>
          ))}
        </ProductGrid>
        :
        <ProductGrid>
          {product?.map((product , i) => (
            <ProductCard key={i} product={product} />
          ))}
        </ProductGrid>
}
      </Box>
    </div>
  );
};