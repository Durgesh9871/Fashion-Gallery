const {ProductModel} = require("../models/ProductsModel");
const {verifyTokenAndAdmin}=require("../middlewares/VerifyTokenAndAdmin")
const ProductsRoute = require("express").Router();

//CREATE ,  Only Admin Authorised middleware(verifyTokenAndAdmin)

ProductsRoute.get("/findit",async(req,res)=>{
  // console.log(req.headers.productid)
  try {
    const ans=await ProductModel.findById({_id:req.headers.productid})
    res.status(200).send(ans)
  } catch (error) {
    console.log(error)
  }
})

ProductsRoute.post("/add",verifyTokenAndAdmin, async (req, res) => {
  // console.log(req.body)
  const newProduct = new ProductModel(req.body);
  try {
    const savedProduct = await newProduct.save();
    // await ProductModel.insertMany(req.body);
    res.status(200).send("Products Added");
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


// GET User can access all the product data

ProductsRoute.get("/", async (req, res) => {
  let  limit=req.query.limit|| 20
  let categories=req.query.categories||["shirts","jacket","coatpant","tshirts"]
  let color=req.query.color||["black","grey","white","red","blue"]
  let  order=req.query.order=="asc"?1:-1 ||1
  let price=req.query.price||5000
  // console.log(req.query)
  try {
    // const d=await ProductModel.find({},{categories,color})
    const d=await ProductModel.find({color:{$in:color},price:{$lte:price},categories:{$in:categories}}).sort({price:order})
    d.length>0?res.status(200).send(d):res.status(200).send({
      data:[],
      msg:"No data present as per query"
    })
  }
  catch (err) {
    res.status(500).send(err);
  }
});


module.exports = {ProductsRoute};