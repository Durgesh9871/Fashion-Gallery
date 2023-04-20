import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ;  


const initialState = {
    loading: false ,
    post :[] ,
    isError: false ,
}


const LaptopReducer = (oldState=initialState, action)=>{
   switch(action.type){
    case GETPRODUCTLAPTOPDATA_REQUEST:
        return{...oldState ,loading:true }
    case GETPRODUCTLAPTOPDATA_SUCCESS:
        return{...oldState , post:action.payload , loading:false} 
    case GETPRODUCTLAPTOPDATA_FAILURE:
        return{...oldState , isError:true , loading:false }  
       default:
        return oldState ; 
   }

}


export {LaptopReducer}