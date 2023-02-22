const express=require("express")
require("dotenv").config()
port=process.env.port
const {connection}=require("./configs/db")

const {router}=require("./Router/Products")

app=express()

app.use(express.json())
app.use('/products',router)
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log(err)
    }
    console.log("listening at port",port)
}) 