import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { sendProductData } from '../../Redux/Laptop_reducer/action'
import { Sidebar } from '../Admin_Components/SliderAdmin'


const initialState = {
 rating:0 , 
 categories:"" ,
 title:"" ,
 price: 200 , 
 realPrice: 400 , 
 brand :"" ,
 description :"" ,
 color:"" ,
 discount :"" ,
 reviews:[],
  backImage:"" ,
  frontImage:"" , 
  sideImage:"",
}

const reducer = (state , action)=>{
     switch(action.type){

     case "TITLE":
        return {...state , title:action.payload}

     case "CATEGORY":
         return {...state , categories:action.payload}
    
    case "BRAND":
        return {...state , brand:action.payload}
  
    case "DESCRIPTION":
            return {...state , description:action.payload}
    
    case "COLOR":
         return {...state , color:action.payload}
        
    case "REALPRICE":
            return {...state , realPrice:action.payload}
    
    case "PRICE":
          return {...state , price:action.payload}
        
    case "FRONTIMAGE":
         return {...state , frontImage:action.payload}

    case "SIDEIMAGE":
            return {...state , sideImage:action.payload}
    
    case "BACKIMAGE":
          return {...state , backImage:action.payload}

     case "RESET":
        return initialState  

        default:
            return state 
     }
}


const AddProduct = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
  
    const dispatchData = useDispatch()

 const handleForm = (state)=>{
 let data = {
    rating:state.rating , 
    categories:[state.categories] ,
    title: state.title ,
    price: state.price , 
    realPrice: state.realPrice , 
    brand :state.brand ,
    description :state.description ,
    color: state.color ,
    discount :5 ,
    reviews:[  "Great Product", "Value for money"],
    Images:[
        {"imageFront":state.frontImage} , {"imageFront":state.sideImage} , {"imageFront":state.backImage}
    ] ,
    mainImage:state.frontImage , 

}

dispatchData(sendProductData(data))
dispatch({type:"RESET"})

 }


  
  
  return (
    <Box>
        <Sidebar />
        <Box background="#171923" height="100%">

          {/* ADD PRODUCT FORM STARTED FROM HERE --------------------- */}
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   red" height="auto" marginLeft="auto"  p="2%" >
          <Heading color="#fff" fontWeight="500">Add Products</Heading>

           {/*  Form Starts from here ------ */}
              <Box width="40%" border="1px solid white" margin="auto" shadow="2xl" padding="30px">

        
           <FormControl isRequired  color="#fff" mt="10px">
         <FormLabel>Title</FormLabel>
         <Input placeholder='Title of Product' value={state.title} onChange={(e) => dispatch({type:"TITLE" , payload:e.target.value })} />
          </FormControl>
           
          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Category</FormLabel>
         <Input placeholder='Category of Product' value={state.categories}  onChange={(e) => dispatch({type:"CATEGORY" , payload:e.target.value})} />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px"  >
         <FormLabel>Brand</FormLabel>
         <Input placeholder='Brand of Product' value={state.brand}  onChange={(e) => dispatch({type:"BRAND" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Description</FormLabel>
         <Input placeholder='Description about the Product' value={state.description}  onChange={(e) => dispatch({type:"DESCRIPTION" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Color</FormLabel>
         <Input placeholder='Color of Product' value={state.color}  onChange={(e) => dispatch({type:"COLOR" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Actual Price</FormLabel>
         <Input placeholder='Real Price of Product ' value={state.realPrice}  onChange={(e) => dispatch({type:"REALPRICE" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Price</FormLabel>
         <Input placeholder='Price after Discount'  value={state.price}  onChange={(e) => dispatch({type:"PRICE" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Image</FormLabel>
         <Input placeholder='Main Image of Product'  value={state.frontImage}  onChange={(e) => dispatch({type:"FRONTIMAGE" , payload:e.target.value})} />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Side Image</FormLabel>
         <Input placeholder='Side Image of Product'  value={state.sideImage}  onChange={(e) => dispatch({type:"SIDEIMAGE" , payload:e.target.value})}  />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Back Image</FormLabel>
         <Input placeholder='Back Image of Product '  value={state.backImage}  onChange={(e) => dispatch({type:"BACKIMAGE" , payload:e.target.value})}  />
          </FormControl>

          
          <Button onClick={()=>handleForm(state)} isDisabled={state.title == "" || state.categories == "" || state.price == "" || state.realPrice == "" || state.frontImage == "" || state.backImage == "" || state.sideImage == ""  || state.color == "" || state.description == "" || state.brand == ""} fontWeight="600" fontSize="20px" background="#171923" color="#fff"  border="2px solid #fff" variant="unstyled" p="0px 50px" mt="55px" ml="240px">Submit</Button>
        

          </Box>

      </Box>
        </Box>

    </Box>
  )
}

export  {AddProduct}
