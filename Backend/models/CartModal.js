const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {

    userId: { 
      type:mongoose.Schema .ObjectId , 
      required: false ,
      ref:"user"
    },
    productId:{ 
      type:mongoose.Schema .ObjectId, 
      required: true ,
      ref:"Product"
    },
    quantity: {
          type: Number,
          default: 1,
        }
  },
  { timestamps: true }
);
const CartModel=mongoose.model("Cart", CartSchema);

module.exports = {
    CartModel
}





