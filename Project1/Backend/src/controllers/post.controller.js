const postModel = require("../models/post.model.js");
const followModel = require('../models/follow.model.js')
const Imagekit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model.js");
const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"), //convert to file(convert buffer)
    fileName: "Test",
    folder: "instagram-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    userId: req.user.id,
  });

  res.status(201).json({
    message: "Post created",
    post,
  });
}

async function getAllPostsController(req, res) {
  const userId = req.user.id;
  const posts = await postModel.find({
    userId: userId,
  });

  res.status(200).json({
    message: "post fetched successfully",
    posts,
  });
}
async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.id;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }
  const isValidUser = post.userId.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Access denied",
    });
  }
  return res.status(200).json({
    message: "post fetched successfully",
    post,
  });
}
async function likePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const post = await postModel.findById({
    _id: postId,
  });

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }
  const like = await likeModel.create({
    post: postId,
    user: username,
  });
  res.status(201).json({
    message: "post is liked successfully",
    like,
  });
}
async function unlikePostController(req, res) {
  const username = req.user.username;
  const postId = req.params.postId;

  const isliked = await likeModel.findOneAndDelete({
    post: postId,
    user: username,
  });
  if (!isliked) {
    return res.status(400).json({
      message: "Post didn't Liked ",
    });
  }

  return res.status(200).json({
    message: "post unliked sucessfully",
  });
}
async function getFeed(req, res) {
  const user = req.user;

  const posts = await postModel
    .find()
    .sort({ _id: -1 })
    .populate("userId")
    .select("-userId.password");

  const updatedPosts = await Promise.all(
    posts.map(async function (elem) {
      elem = elem.toObject(); // convert mongoose doc to object
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: elem._id,
      });

      elem.isLiked = !!isLiked;
      
      const follow = await followModel.findOne({
        follower:user.username,
        followee: elem.userId.username
      })

         elem.followStatus = follow ? follow.status : null;
      return elem;
    }),
  );

  res.status(200).json({
    message: "post fetched successfully",
    posts: updatedPosts,
  });
}
module.exports = {
  createPostController,
  getAllPostsController,
  getPostDetailsController,
  likePostController,
  getFeed,
  unlikePostController,
};
