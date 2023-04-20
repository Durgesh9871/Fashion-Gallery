const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    id:{type:Number},
    rating:{ type: Number, required: true },
    categories: { type: String },
    title: { type: String, required: true},
    price: { type: Number, required: true },
    realPrice:{ type: Number, required: true },
    brand:{ type: String, required: true },
    description: { type: String, required: true, },
    color: { type: String },
    discount:{type:String},
    reviews:{ type: Array},
    Images: { type: Array },
    mainImage:{type:String,require:true}
  },
  // Time when product was added in DB(createdAt ,updatedAt)
  { timestamps: true } 
);
const ProductModel=mongoose.model("Product", ProductSchema);
module.exports = {
    ProductModel,
}
