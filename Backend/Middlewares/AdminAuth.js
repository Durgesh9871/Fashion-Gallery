const bcrypt=require("bcrypt")
require('dotenv')
const AdminAuth=(req,res,next)=>{
    const token=req.headers.authorization
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