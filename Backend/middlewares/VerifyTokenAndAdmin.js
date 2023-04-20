const jwt=require("jsonwebtoken");
const { UserModel } = require("../models/User.model");
require('dotenv').config()


const verifyTokenAndAdmin=async(req,res,next)=>{
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.secretKey);
    if (decoded) {
      const userID = decoded.userID;
      const user=await UserModel.findOne({_id:userID});
      if(user.isAdmin){
        req.body.userID = userID;
        next();
      }
      else{
        res.send('You are not authorize')
      }
    } else {
      res.send("Please Login First");
    }
  } else {
    res.send("Please Login First");
  }
};


module.exports = {
  verifyTokenAndAdmin,
};