const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  birthdate: String,
  mobileNo: Number,
  signUpTime: String,
  active: Boolean,
  loginTime: String,
  logoutTime: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
