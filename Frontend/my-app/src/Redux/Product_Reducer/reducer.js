import React from 'react'
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from './actionTypes'

let initial={
    product:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initial,{type,payload}) => {
  switch(type){
    case GET_PRODUCT_REQUEST:return {...state,isLoading:true}
    case GET_PRODUCT_SUCCESS:return {...state,isLoading:false,product:payload}
    case GET_PRODUCT_REQUEST:return {...state,isLoading:false,isError:true}

    default : return state
  }
  
}