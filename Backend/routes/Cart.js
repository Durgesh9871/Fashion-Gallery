const {CartModel} = require("../models/CartModel");
const {activeCartModel}=require("../models/activeCart.model")
const {verifyTokenAndAdmin}=require("../middlewares/VerifyTokenAndAdmin")
const {AddUserIdInCart}=require("../middlewares/AddUserIdInCart")

const Cartrouter = require("express").Router();

//CREATE  Only logged user middleware verifyToken,

Cartrouter.post("/add",  AddUserIdInCart,async (req, res) => {
  const userId=req.userId
  console.log({userId})

  const productId=req.body.productId
  const newCart = new CartModel({userId,productId});
  const existProduct=await CartModel.find({$and:[{productId},{userId}]})
  const existuser=await activeCartModel.find({userId})
  console.log({existuser})

  
  try {
    if(existuser.length<=0){
       await activeCartModel({userId}).save()
      }
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
  console.log({cart:req.body})
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

Cartrouter.delete("/delete/:id",  async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id)
    res.status(200).send("Cart has been deleted...");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET USER CART Only logged user --> middleware --> verifyTo(/cart/userid)
Cartrouter.get("/usercart",AddUserIdInCart,  async (req, res) => {
  const id=req.userId
  try {
    const cart = await CartModel.find({ userId: id });
    console.log({cart})
    cart.length>0?res.status(200).send(cart):res.status(200).send("No items in your cart")
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// //GET ALL cart items--> only Admin middleware--> verifyTokenAndAdmin

Cartrouter.get("/all", verifyTokenAndAdmin,async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send(carts);
  } catch (err) {
    res.status(500).send(err);
  }
});

Cartrouter.get("/alluser",verifyTokenAndAdmin,async(req,res)=>{
  try{
    const allcart=await activeCartModel.find()
   allcart.length>0? res.status(200).send(allcart):
   res.status(200).send("Nobody user have items in own cart")
  }
  catch(err){
    res.status(500).send(err.message)
  }

})

module.exports = {Cartrouter};



// 