import axios from "axios"

const getCartData = (dispatch)=>{
    dispatch({type:"CART_LOADING"})
    axios.get(`${process.env.REACT_APP_URL}/cart`,{
        headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
    })
    .then((res)=> dispatch({type:"CART_DATA_SUCCESS" ,payload:res.data }) )
    .catch((err)=> dispatch({type:"CART_DATA_FAILURE"}))
}


export {getCartData}