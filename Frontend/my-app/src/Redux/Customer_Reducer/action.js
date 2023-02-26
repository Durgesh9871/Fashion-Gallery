import { GET_CUSTOMER_DATA_FAILURE , GET_CUSTOMER_DATA_REQUEST ,GET_CUSTOMER_DATA_SUCCESS } from "./actionType";
import axios from "axios"


const getCustomerData = (dispatch)=>{
   dispatch({type: GET_CUSTOMER_DATA_REQUEST })
   return axios.get('http://localhost:8080/customerData')
   .then((res) => dispatch({type:GET_CUSTOMER_DATA_SUCCESS , payload:res.data}))
   .catch((err)=> dispatch({type:GET_CUSTOMER_DATA_FAILURE}))
}


export {getCustomerData}