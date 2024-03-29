
import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ; 
import axios from "axios"


const getDataProduct = (page)=>(dispatch)=>{
        dispatch({type:GETPRODUCTLAPTOPDATA_REQUEST}) 
        return axios.get(`${process.env.REACT_APP_URL}/products?page=${page}&limit=8`)
        .then((res)=> dispatch({type:GETPRODUCTLAPTOPDATA_SUCCESS , payload:res.data})) 
        .catch(()=> dispatch({type:GETPRODUCTLAPTOPDATA_FAILURE}))
}




const DeleteProductData =(id)=> (dispatch)=>{
        dispatch({type:"GET_DELETE_REQUEST"}) 
        return axios.delete(`${process.env.REACT_APP_URL}/products/${id}` ,{
                headers:{
                        authorization:JSON.parse(localStorage.getItem("token"))
                }
        })
        .then((res)=> dispatch(getDataProduct(1)) ) 
        .catch((err)=> console.log(err , "Error in Deleting the data") )
}



const sendProductData = (data)=>(dispatch)=>{
        console.log(data)
        dispatch({type:"SEND_PRODUCT_REQUEST"})
        return axios.post(`${process.env.REACT_APP_URL}/products` , data ,{
                headers:{
                        authorization:JSON.parse(localStorage.getItem("token"))
                } 
        })
        .then((res)=> dispatch(getDataProduct(1)))
        .catch((err)=>console.log(err , "ERROR IN DATA SENDING"))
}

export {DeleteProductData , sendProductData , getDataProduct}


