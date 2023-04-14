import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
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

  //  pagination 
  const [page , setPage] = useState(1)
  const [pageNext , setPageNext] = useState(false)
const [pagePre , setPagePre] = useState(false)
const [paginationData , setPaginationData] = useState([])


//  GET ALL DATA FOR PAGINATION FOR SETTING DISABLE BUTTON 
const PaginationFunction = (objParams)=>{
  axios.get(`${process.env.REACT_APP_URL}/products` ,objParams)
  .then((res)=> setPaginationData(res.data))
}

const nextPageDisable = Math.ceil(paginationData.length/8)



  React.useEffect(() => {
    let order = searchParams.get("order");
    let price=searchParams.get("price")
    let objParams = {
      categories: searchParams.getAll("categories"),
      color: searchParams.getAll("color"),
      order: order,
      price: price
    };
    dispatch(getProducts(objParams , page))
    PaginationFunction(objParams)
  }, [location.search , page]);

  // console.log(product ,"product")
  //  pagination --
  const handleNextPage = (data)=>{
    setPageNext(true)
    setPage(page+data)
    setTimeout(()=>{
      setPageNext(false)
    },400)
    
   }
   const handlePreviosPage = (data)=>{
    setPagePre(true)
    setPage(page+data)
    setTimeout(()=>{
      setPagePre(false)
    },400)
   }



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
       {product.length !== 0 &&   <Pagination  handleNextPage={handleNextPage} handlePreviosPage={handlePreviosPage} page={page} pageNext={pageNext} pagePre={pagePre} nextPageDisable={nextPageDisable} />}
          

      </Box>
    </div>
  );
};