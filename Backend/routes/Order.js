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
