import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

function getProductRequest(){
    return {type:GET_PRODUCT_REQUEST}
}

function getProductSuccess(payload){
    return {type:GET_PRODUCT_SUCCESS,payload}
}

function getProductFailure(){
    return {type:GET_PRODUCT_FAILURE}
}

export {getProductFailure,getProductRequest,getProductSuccess}

export const getProducts=(objParams , page)=>(dispatch)=>{
    dispatch(getProductRequest())
    axios({
        method:'get',
        url:`${process.env.REACT_APP_URL}/products?page=${page}&limit=8`,
        params:objParams
    })
    .then((res)=>{
        dispatch(getProductSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getProductFailure())
        console.error(err)
    })
}