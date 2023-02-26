import { GET_CUSTOMER_DATA_FAILURE , GET_CUSTOMER_DATA_REQUEST ,GET_CUSTOMER_DATA_SUCCESS } from "./actionType";


const initialState = {
    customerData :[] ,
     isLoadind:false , 
     isError:false ,
}


const CustomerReducer = (oldState=initialState , action)=>{
     switch(action.type){
        case GET_CUSTOMER_DATA_REQUEST :
            return {...oldState , isLoadind:true }
        case GET_CUSTOMER_DATA_SUCCESS :
            return {...oldState , customerData:action.payload , isLoadind:false }    
        case GET_CUSTOMER_DATA_FAILURE :
            return {...oldState , isError:true , isLoadind:false }
          
         default:
            return oldState    

     }
    


}

export {CustomerReducer}