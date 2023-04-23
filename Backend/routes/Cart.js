const { CartModel } = require("../models/CartModel");
const { verifyTokenAndAdmin } = require("../middlewares/VerifyTokenAndAdmin");
const { AddUserIdInCart } = require("../middlewares/AddUserIdInCart");


const mongoose = require("mongoose");

const Cartrouter = require("express").Router();

//CREATE  Only logged user middleware verifyToken,

Cartrouter.post("/",  AddUserIdInCart,async (req, res) => {
  const userId=req.userId
  const productId=req.body.productId
  const newCart = new CartModel({userId,productId});
  const existProduct=await CartModel.find({$and:[{productId},{userId}]})
  try {
    if (existProduct.length > 0) {
      res.status(200).send("Item already present in cart");
    } else {
      const savedCart = await newCart.save();
      res.status(200).send({
        msg: "item added in your cart",
        item: savedCart,
      });
    }

  } catch (err) {
    res.status(500).send(err);
  }
});


//UPDATE   Only logged user and own cart --> middleware --> verifyTokenAndAuthorization

Cartrouter.patch("/:id", async (req, res) => {
  const quantity = req.body.quantity;
  // console.log({quantity})
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE  Only logged user and own cart --> middleware --> verifyTokenAndAuthorization

Cartrouter.delete("/:id", AddUserIdInCart , async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Cart has been deleted...");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET USER CART Only logged user --> middleware --> verifyTo(/cart/userid)

Cartrouter.get("/", AddUserIdInCart, async (req, res) => {
  const userId =req.userId;
  var id =new mongoose.Types.ObjectId(userId);
  try {

    const cart=await CartModel.find({userId:id})
    .populate("productId").select("_id userId productId quantity")
    cart.length > 0
      ? res.status(200).send(cart)
      : res.status(200).send("No items in your cart");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// //GET ALL cart items--> only Admin middleware--> verifyTokenAndAdmin

Cartrouter.get("/all", verifyTokenAndAdmin, async (req, res) => {
  try {

    const cart=await CartModel.find().populate("productId")
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err);
  }
});


Cartrouter.get("/alluser",verifyTokenAndAdmin, async (req, res) => {
  try {
    
    const allcart=await CartModel.find().populate("userId productId")
    allcart.length > 0
      ? res.status(200).send(allcart)
      : res.status(200).send("Nobody user have items in own cart");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = { Cartrouter };


