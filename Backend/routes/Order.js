
const {OrderModel }= require("../Modals/OrderModal");
const {verifyTokenAndAdmin,} = require("../Middlewares/VerifyTokenAndAdmin");
const {AddUserIdInCart}=require("../Middlewares/AddUserIdInCart")

const { mongoose } = require("mongoose");

const OrderRouter = require("express").Router();


//  USER SIDE


//********************** CREATE   Logged User only ***************************

OrderRouter.post("/add",AddUserIdInCart, async (req, res) => {
  const userId=req.userId
  
  try {

    const newOrder = new OrderModel({...req.body,userId});
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } 
  catch (err){
    res.status(500).send(err);
  }
});

//****************************** GET USER ORDERS  --> user can access only own order itmes **************************

OrderRouter.get("/",AddUserIdInCart, async (req, res) => {
  const id=new mongoose.Types.ObjectId(req.userId)
  // console.log(req.params.id
  try {
     
    const orders=await OrderModel.find().populate("productId")
    
    orders.length>0
    ?res.status(200).send(orders)
    :res.status(200).send({msg:"looks like you did't place any order so for"})
  } 
  catch (err) 
  {
    res.status(500).send(err);
  }   
});

OrderRouter.patch("/cancel/:id",AddUserIdInCart, async (req, res) => {
  // console.log(req.params.id)
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {_id:req.params.id},
      {
        $set: {isCanceled:true},
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } 
  catch (err)
  {
    res.status(500).send(err);
  }
    
});


//  ADMIN SIDE

// *************  UPDATE --> Only Admin has access*********************


// *******************************GET ALL  (Total order)-->  Only Admin has access to preform  ****************

OrderRouter.get("/all", verifyTokenAndAdmin, async (req, res) => {

  try {
    const orders = await OrderModel.find()
    orders.length > 0
      ? res.status(200).send(cart)
      : res.status(200).send("No orders placed yet");
  } 
  catch (err)
  {
    res.status(500).send(err);
  }
});


module.exports = {
    
    OrderRouter
    
};
=======
const {OrderModel }= require("../Modals/OrderModal");
const {verifyTokenAndAdmin,} = require("../Middlewares/VerifyTokenAndAdmin");
const {AddUserIdInCart}=require("../Middlewares/AddUserIdInCart")
const { mongoose } = require("mongoose");

const OrderRouter = require("express").Router();

//  USER SIDE

//********************** CREATE   Logged User only ***************************

OrderRouter.post("/add",AddUserIdInCart, async (req, res) => {
  const userId=req.userId
  try {
    const newOrder = new OrderModel({...req.body,userId});
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } 
  catch (err){
    res.status(500).send(err);
  }
});

//****************************** GET USER ORDERS  --> user can access only own order itmes **************************

OrderRouter.get("/",AddUserIdInCart, async (req, res) => {
  const id=new mongoose.Types.ObjectId(req.userId)
  try {
     
    const orders=await OrderModel.find().populate("productId")
    orders.length>0
    ?res.status(200).send(orders)
    :res.status(200).send({msg:"looks like you did't place any order so for"})
  } 
  catch (err) 
  {
    res.status(500).send(err);
  }   
});

//****************************** UPDATE USER ORDERS  -->only user can update  own order itmes **************************

OrderRouter.patch("/cancel/:id",AddUserIdInCart, async (req, res) => {
  
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {_id:req.params.id},
      {
        $set: {isCanceled:true},
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } 
  catch (err)
  {
    res.status(500).send(err);
  }
    
});


//  ADMIN SIDE

// *************  UPDATE --> Only Admin has access*********************

OrderRouter.patch("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {_id:req.params.id},
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } 
  catch (err) {

    res.status(500).send(err);
  }   
}
);


module.exports = {
    
    OrderRouter
    
};

