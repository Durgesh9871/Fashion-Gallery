const mongoose = require("mongoose");

const activeCartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

const activeCartModel = mongoose.model("activeCart", activeCartSchema);

module.exports={
  activeCartModel
}