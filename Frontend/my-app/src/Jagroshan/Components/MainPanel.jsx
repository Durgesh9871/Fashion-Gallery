import { Box } from "@chakra-ui/react";
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
  const allproducts=useSelector((store)=>store.productReducer.product)
  const [searchParams] = useSearchParams();
  const location = useLocation();

  React.useEffect(() => {
    let order = searchParams.get("order");
    let objParams = {
      categories: searchParams.getAll("categories"),
      colors: searchParams.getAll("color"),
      _sort: order,
      _order: order,
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
        <ProductGrid>
          {allproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    </div>
  );
};