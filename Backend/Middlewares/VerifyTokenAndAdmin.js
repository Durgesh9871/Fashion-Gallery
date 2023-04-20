const jwt=require("jsonwebtoken");
const { UserModel } = require("../Modals/UserModal");
require('dotenv').config()


const verifyTokenAndAdmin=async(req,res,next)=>{
  const token = req.headers.authorization;
  try{
    if (token) {
      const decoded = jwt.verify(token, process.env.secretKEY);
      // console.log({decoded})
      if (decoded) {
        const userID = decoded.userID;
        const user=await UserModel.findOne({_id:userID})
        if(user.isAdmin){
          next()
        }
        else{
          res.status(200).send("You are not authorized");
        }
      } else {
        res.status(200).send("Please Login First");
      }
    } else {
      res.status(200).send("Please Login First");
    }
  }
  catch(err){
    res.status(400).send(err)
  }
}

module.exports = {
  verifyTokenAndAdmin,
};