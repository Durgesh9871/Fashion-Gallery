const jwt=require("jsonwebtoken")
require('dotenv').config()
const AdminAuth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,process.env.secretKey)
        if(decode){
            -
        }
    }
    const email=req.body.email
    if(email=="sonkarg117@gmail.com"){
        next()
    }
    else{
        res.send({
            msg:"you are not authorized person"
        })
    }
}
module.exports={
    AdminAuth
}