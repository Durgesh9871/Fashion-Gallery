const {OrderModel }= require("../models/orderModel");
const {verifyTokenAndAdmin,} = require("../middlewares/VerifyTokenAndAdmin");
const {AddUserIdInCart}=require("../middlewares/AddUserIdInCart")

const OrderRouter = require("express").Router();

//********************** CREATE   Logged User only ***************************

OrderRouter.post("/add",AddUserIdInCart, async (req, res) => {
    const userId=req.userId
  const newOrder = new OrderModel({...req.body,userId});
  try {
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

// *************  UPDATE --> Only Admin has access*********************

OrderRouter.patch("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.params.id)
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      {_id:req.params.id},
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});

//**************************  DELETE  Only Admin has access to preform  ****************************
OrderRouter.delete("delete/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Order has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//****************************** GET USER ORDERS  --> user can access only own cart itmes **************************

OrderRouter.get("/",AddUserIdInCart ,async (req, res) => {
  console.log({userId:req.userId})
  try {
    const orders = await OrderModel.find({ userId: req.userId });
   orders.length>0? res.status(200).send(orders):res.status(200).send({
    msg:"You have nothing order so for"
   })
  } catch (err) {
    res.status(500).send(err);
  }
});

// *******************************GET ALL  (Total order)-->  Only Admin has access to preform  ****************

OrderRouter.get("/all", verifyTokenAndAdmin, async (req, res) => {

  try {
    const orders = await OrderModel.find();
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = {
    OrderRouter
};