const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.ObjectId, 
      required: true ,
      ref:"user"
    },
    productId: {
      type:mongoose.Schema.ObjectId,
      required: true ,
      ref:"Product"
    },
    quantity: {
          type: Number,
          default: 1,
    },
    amount: { 
      type: Number, 
      required: true
    },
    address: { 
      type: Object, 
      required: true 
    },
    status: { 
      type: String, 
      default: "pending"
     },
    isCanceled: { 
      type: Boolean, 
      default: false 
    }
  },
  { timestamps: true }
    
);

module.exports={
    OrderModel
}
