const express  = require("express")
const {PModel} =require("../modules/productsModel")
const router=express.Router()

router.get('/' ,async (req , res)=>{
    const query=req.query

    try{
        const data=await PModel.find(query)
        res.send(data)
    }
    catch{
        res.send('hello from product data err0or get:)')
    }
  

})
router.post('/add' , async (req , res)=>{
    console.log(req.body)

    try{
        const product= new PModel(req.body)
        console.log("ppp",product)
        await product.save()
       res.send("saved")
        
 
    }
    catch(err){
        res.send(`error post:)${err}`)
    }

})

router.patch("/update",(req,res)=>{
    res.send("path")
})

module.exports={
    router
}
