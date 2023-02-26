const {ProductModel} = require("../models/ProductsModel");
const {verifyTokenAndAdmin}=require("../middlewares/VerifyTokenAndAdmin")
const ProductsRoute = require("express").Router();

//CREATE ,  Only Admin Authorised middleware(verifyTokenAndAdmin)

ProductsRoute.post("/add",verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE, Only Admin Authorised, middleware(verifyTokenAndAdmin)

ProductsRoute.patch("/update/:id",verifyTokenAndAdmin, async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE   Only Admin Authorised, middleware(verifyTokenAndAdmin)

ProductsRoute.delete("/delete/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET , Product by id ,Anyone can access

ProductsRoute.get("/:id", async (req, res) => { 
  console.log(req.params.id)
  try {
    const product = await ProductModel.findById(req.params.id);
    product?res.status(200).send(product):
    res.status(200).send("Product is not available");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET ALL ,Product, Anyone can access

ProductsRoute.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  console.log({qCategory})
  try {
    let products;

    if (qNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(10);
    } else if (qCategory) {
      products = await ProductModel.find({
        categories:{
          $in:[qCategory],
        },
      });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = {ProductsRoute};