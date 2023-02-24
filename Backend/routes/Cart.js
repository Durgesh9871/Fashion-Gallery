const {CartModel} = require("../Models/CartModel");
const {
    verifyToken,
    verifyTokenAndAuthorization,
  } = require("../Middleware/VerifyToken");
  const {verifyTokenAndAdmin}=require("../Middleware/VerifyTokenAndAdmin")

const Cartrouter = require("express").Router();

//CREATE  Only logged user middleware verifyToken,

Cartrouter.post("/",  async (req, res) => {
  const newCart = new CartModel(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE   Only logged user and own cart --> middleware --> verifyTokenAndAuthorization
Cartrouter.put("/:id", async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE  Only logged user and own cart --> middleware --> verifyTokenAndAuthorization

Cartrouter.delete("/:id",  async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Cart has been deleted...");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET USER CART Only logged user --> middleware --> verifyTo(/cart/userid)
Cartrouter.get("/cart/:userid",  async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.userId });
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// //GET ALL only Admin middleware--> verifyTokenAndAdmin

Cartrouter.get("/", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = {Cartrouter};