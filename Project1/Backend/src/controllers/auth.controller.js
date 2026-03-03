const userModel = require("../models/user.model.js");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

async function logincontroller(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  }).select('+password');

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

 

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "wrong password",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "logged in",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function registercontroller(req, res) {
  const { email, username, password, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  }).select('+password');

  if (isUserAlreadyExists) {
    if (isUserAlreadyExists.email === email) {
      return res.status(409).json({ message: "Email already exists" });
    }
    if (isUserAlreadyExists.username === username) {
      return res.status(409).json({ message: "Username already exists" });
    }
  }

  const hash = await bcrypt.hash(password,10);

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered sucessfuly",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function getMeController(req,res){
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  res.status(200).json({
    user:{
      username:user.username,
      email:user.email,
      bio:user.bio,
      profileImage:user.profileImage
    }
  })
}
module.exports = {
  registercontroller,
  logincontroller,
  getMeController
};
