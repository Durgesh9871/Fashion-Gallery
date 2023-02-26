
import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ; 
import axios from "axios"


const getDataProduct = (dispatch)=>{
        dispatch({type:GETPRODUCTLAPTOPDATA_REQUEST}) 
        return axios.get(`https://joyous-tick-sweatsuit.cyclic.app/products`)
        .then((res)=> dispatch({type:GETPRODUCTLAPTOPDATA_SUCCESS , payload:res.data})) 
        .catch(()=> dispatch({type:GETPRODUCTLAPTOPDATA_FAILURE}))
}




const DeleteProductData =(id)=> (dispatch)=>{
        dispatch({type:"GET_DELETE_REQUEST"}) 
        return axios.delete(`https://joyous-tick-sweatsuit.cyclic.app/products/${id}`)
        .then((res)=> dispatch(getDataProduct)) 
        .catch((err)=> console.log(err , "Error in Deleting the data") )
}



const sendProductData = (data)=>(dispatch)=>{
        dispatch({type:"SEND_PRODUCT_REQUEST"})
        return axios.post(`https://joyous-tick-sweatsuit.cyclic.app/products` , data)
        .then()
        .catch((err)=>console.log(err , "ERROR IN DATA SENDING"))
}

export {DeleteProductData , sendProductData , getDataProduct}


