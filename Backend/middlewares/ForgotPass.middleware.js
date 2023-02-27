const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const bcrypt = require("bcrypt");


//send otp
const sendOtp = async (req, res, next) => {
  const { email } = req.body;

  let user = await UserModel.findOne({ email });

  if (user) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.fgEmail,
        pass: process.env.fgPass,
      },
    });

    const otp = otpGenerator.generate(4, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const mailOptions = {
      from: process.env.fgEmail,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for resetting your password is ${otp}. This OTP is valid for 2 minutes.`,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error occurred :T");
        res.send(error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send({sentOtp:otp,email,otpSentTime:Date.now()})
        next();
      }
    });
  } else {
    res.status(404).send("Email is not registered");
  }
};


//verify otp
const verifyOtp = async (req, res, next) => {
  const { email,otp, sentOtp, otpSentTime } = req.body;

  if (email && sentOtp && otpSentTime) {
    const currentTime = Date.now();
    const timeDiff = currentTime - otpSentTime;

    if (otp === sentOtp && timeDiff <= 120000) {
      // OTP is valid for 2 minutes
      next();
    } else if(otp!==sentOtp){
      res.status(401).send("Invalid OTP");
    }else if(timeDiff>120000)res.send("OTP expired")
  } else {
    res.status(400).send("OTP not sent yet");
  }
};


//update password
const updatePassword = async (req, res) => {
  const {email, newPassword } = req.body;

  let user = await UserModel.findOne({ email });

  if (user) {
    // console.log(user);
    bcrypt.hash(
      newPassword,
      Number(process.env.saltRounds),
      async (err, hash) => {
        if (hash) {
          user.password = hash;
          await user.save();
        //   console.log(user);
          res.status(200).send("Password updated successfully");
        } else {
          res.status(500).send({eroor: err });
        }
      }
    );
  } else {
    res.status(404).send("User not found");
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
  updatePassword,
};
