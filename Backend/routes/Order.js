const {OrderModel }= require("../Models/orderModel");
const {verifyTokenAndAdmin,} = require("../Middlewares/VerifyTokenAndAdmin");
const {AddUserIdInCart}=require("../Middlewares/AddUserIdInCart")

const OrderRouter = require("express").Router();

//********************** CREATE   Logged User only ***************************

OrderRouter.post("/",AddUserIdInCart, async (req, res) => {
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

OrderRouter.patch("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
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
OrderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Order has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//****************************** GET USER ORDERS  --> user can access **************************

OrderRouter.get("/:userId", async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.params.userId });
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

// *******************************GET ALL  (Total order)-->  Only Admin has access to preform  ****************

OrderRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});




OrderRouter.get


module.exports = {
    OrderRouter
};