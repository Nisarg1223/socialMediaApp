const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exists"],
    required: [true, "user name is required"],
  },
  email: {
    type: String,
    unique: [true, "Email is already exists"],
    required: [true, "Email is required"],
  },
  password:{
    type:String,
    required:[true,'password is required']
  },
  bio:String,
  profileImage:{
    type:String,
    default:'https://ik.imagekit.io/xboj1v5ab/instagram_default_user.png'
  }
});


const userModel = mongoose.model('users',userSchema);

module.exports = userModel