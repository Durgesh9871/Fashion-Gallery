const {CartModel} = require("../Models/CartModel");
const {verifyTokenAndAdmin}=require("../Middlewares/VerifyTokenAndAdmin")
const {AddUserIdInCart}=require("../Middlewares/AddUserIdInCart")

const Cartrouter = require("express").Router();

//CREATE  Only logged user middleware verifyToken,

Cartrouter.post("/",  AddUserIdInCart,async (req, res) => {
  const userId=req.userId

  const productId=req.body.productId
  const newCart = new CartModel({userId,productId});
  const existProduct=await CartModel.find({$and:[{productId},{userId}]})
  console.log(existProduct)
  
  try {
    if(existProduct.length>0){
      res.status(200).send("Item already present in cart") 
    }
    else{const savedCart = await newCart.save();
    res.status(200).send({
      msg:"item added in your cart",
      item:savedCart
    })};
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE   Only logged user and own cart --> middleware --> verifyTokenAndAuthorization
Cartrouter.patch("/update/:id", async (req, res) => {
  const quantity=req.body.quantity
  console.log(req.body)
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

Cartrouter.delete("delete/:id",  async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id)
    res.status(200).send("Cart has been deleted...");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET USER CART Only logged user --> middleware --> verifyTo(/cart/userid)
Cartrouter.get("/usercart/:id",  async (req, res) => {
  try {
    const cart = await CartModel.find({ userId: req.params.id });
    console.log({cart})
    cart.length>0?res.status(200).send(cart):res.status(200).send("No items in your cart")
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// //GET ALL only Admin middleware--> verifyTokenAndAdmin

Cartrouter.get("/", verifyTokenAndAdmin,async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = {Cartrouter};



// 