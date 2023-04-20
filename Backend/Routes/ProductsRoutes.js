const {verifyTokenAndAdmin}=require("../Middlewares/VerifyTokenAndAdmin");
const {ProductModel}=require('../Modules/ProductsModel')

const ProductsRoute = require("express").Router();


//CREATE ,  Only Admin Authorised middleware(verifyTokenAndAdmin)


ProductsRoute.post("/", async (req, res) => {
  try {
    const savedProduct = await newProduct.insetmany(req.body);
  //  const savedProduct=new ProductModel(req.body)
    await savedProduct.save()
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
});


//UPDATE, Only Admin Authorised, middleware(verifyTokenAndAdmin)

ProductsRoute.patch("/:id",verifyTokenAndAdmin, async (req, res) => {
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

ProductsRoute.delete("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Product has been deleted...");
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET , Product by id ,Anyone can access

ProductsRoute.get("/:id", async (req, res) => { 
  try {
    const product = await ProductModel.findById(req.params.id);
    product?res.status(200).send(product):
    res.status(200).send("Product is not available");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//GET ALL ,Product, Anyone can access



module.exports = {ProductsRoute}
