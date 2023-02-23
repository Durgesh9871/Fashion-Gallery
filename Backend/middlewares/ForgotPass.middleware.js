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

    const otp = otpGenerator.generate(6, {
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
        req.session.sentOtp = otp;
        req.session.email = email;
        req.session.otpSentTime = Date.now();
        // console.log(req.session);
        next();
      }
    });
  } else {
    res.send("Email is not registered");
  }
};


//verify otp
const verifyOtp = async (req, res, next) => {
  const { otp } = req.body;
//   console.log(req.session);
  const { email, sentOtp, otpSentTime } = req.session;

  if (email && sentOtp && otpSentTime) {
    const currentTime = Date.now();
    const timeDiff = currentTime - otpSentTime;

    if (otp === sentOtp && timeDiff <= 120000) {
      // OTP is valid for 2 minutes
      next();
    } else {
      res.send("Invalid OTP or OTP expired");
    }
  } else {
    res.send("OTP not sent yet");
  }
};


//update password
const updatePassword = async (req, res) => {
  console.log(req.session);
  const { email } = req.session;
  const { newPassword } = req.body;

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
          res.send("Password updated successfully");
        } else {
          res.send({ err });
        }
      }
    );
  } else {
    res.send("User not found");
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
  updatePassword,
};
