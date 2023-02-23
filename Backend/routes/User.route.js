const express = require("express");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authenticate } = require("../middlewares/Auth.middleware");
const {
  sendOtp,
  verifyOtp,
  updatePassword,
} = require("../middlewares/ForgotPass.middleware");

const userRouter = express.Router();

//register router
userRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, birthdate, mobileNo } =
    req.body;
  try {
    const alreadyUser = await UserModel.findOne({ email });
    if (alreadyUser) res.send("User already exist, please login");
    else {
      bcrypt.hash(
        password,
        Number(process.env.saltRounds),
        async (err, hash) => {
          if (hash) {
            const date = Date.now();
            const signUpTime = new Date(date);
            const user = new UserModel({
              firstName,
              lastName,
              email,
              password: hash,
              birthdate,
              mobileNo,
              signUpTime,
            });
            await user.save();
            res.send("Registered");
          } else {
            res.send(`Error Occurred while Registering: ${err}`);
          }
        }
      );
    }
  } catch (err) {
    res.send(`Error occurred while registering: ${err}`);
  }
});

//login router
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userID: user._id }, process.env.secretKey);
        const date = Date.now();
        const loginTime = new Date(date);
        user.active = true;
        user.loginTime = loginTime;
        user.save();
        res.send({ msg: "Login Successfull", token: token });
        console.log(user);
      } else {
        res.send(`Wrong Credentials: ${err}`);
      }
    });
  } catch (err) {
    res.send(`Wrong Credentials: ${err}`);
  }
});

//logout router
userRouter.get("/logout", authenticate, async (req, res) => {
  const { userID } = req.body;
  try {
    if (userID) {
      const user = await UserModel.findOne({ _id: userID });
      const date = Date.now();
      const logoutTime = new Date(date);
      user.logoutTime = logoutTime;
      user.active = false;
      user.save();
      console.log(user);
      res.send(`User of ID: ${user._id} has been successfully logout`);
    } else {
      res.send(`Can't Logout :${err}`);
    }
  } catch (err) {
    res.send(`Can't Logout :${err}`);
  }
});

//forgot password:-

// Route for sending OTP
userRouter.post("/sendOtp", sendOtp, (req, res) => {
  res.send("OTP sent successfully");
});

// Route for verifying OTP and allowing user to reset password
userRouter.post("/verifyOtp", verifyOtp, (req, res) => {
  res.send("OTP verified successfully");
});

// Route for updating new password
userRouter.post("/updatePassword", updatePassword, (req, res) => {
  res.send("Password updated successfully");
});

module.exports = {
  userRouter,
};
