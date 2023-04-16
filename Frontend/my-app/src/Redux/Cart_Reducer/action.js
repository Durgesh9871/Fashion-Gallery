import axios from "axios"

const getCartData = (dispatch)=>{
    dispatch({type:"CART_LOADING"})
   return axios.get(`${process.env.REACT_APP_URL}/cart`,{
        headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
    })
    .then((res)=> dispatch({type:"CART_DATA_SUCCESS" ,payload:res.data }) )
    .catch((err)=> dispatch({type:"CART_DATA_FAILURE"}))
}


//  delete cart request -----------------
const getCartDelete = (id)=>(dispatch)=>{
   return axios.delete(`${process.env.REACT_APP_URL}/cart/${id}` ,{
        headers: {
                authorization: JSON.parse(localStorage.getItem("token")),
              }
    })
    .then((res)=>  dispatch(getCartData))

}


export {getCartData , getCartDelete}