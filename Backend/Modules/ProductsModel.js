const mongoose=require("mongoose")

const schema=mongoose.Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    rating:{type:Number,require:true},
    reviews:{type:Number,require:true},
    src:{type:String,require:true},
    offPrice:{type:Number,require:true},
    brand:{type:String,require:true},
    subtitle:{type:String,require:true},
    
}
,{
    virsionKey:"none"
})

const PModel=mongoose.model("products",schema)

module.exports={
    PModel
}