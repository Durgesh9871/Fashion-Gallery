const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    
  },
  // Time when product was added in DB(createdAt ,updatedAt)
  { timestamps: true } 
);

const ProductModel=mongoose.model("Product", ProductSchema);
module.exports = {
    ProductModel
}