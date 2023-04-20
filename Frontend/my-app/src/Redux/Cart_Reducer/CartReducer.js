import React from 'react'



const initialState = {
    cartLoading:false  ,
    cartData:[]  ,
    cartError:false 
}


const CartReducer = (oldstate=initialState , action) => {
          
    switch(action.type){
        case "CART_LOADING":
        return{...oldstate , cartLoading:true}

        case "CART_DATA_SUCCESS":
        return {...oldstate , cartData:action.payload , cartLoading:false}

        case "CART_DATA_FAILURE":
        return {...oldstate , cartError:true , cartLoading:false}

        default:
            return oldstate 
    }
  
}

export  {CartReducer}
