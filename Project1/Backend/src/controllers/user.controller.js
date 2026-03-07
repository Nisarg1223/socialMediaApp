const followModel = require("../models/follow.model.js");
const { findOne } = require("../models/post.model.js");
const userModel = require("../models/user.model.js");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFolloweeExists) {
    return res.status(404).json({
      message: "user you are trying to follow does not exist",
    });
  }
  if (followerUsername === followeeUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const existingRecord = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  //if record exists.
  if (existingRecord) {
    if (existingRecord.status === "accepted") {
      return res.status(409).json({
        message: `you are already following ${followeeUsername}`,
      });
    }
    if (existingRecord.status === "pending") {
      return res.status(409).json({
        message: `follow request is already sent to the ${followeeUsername}`,
      });
    }
    if (existingRecord.status === "rejected") {
      existingRecord.status = "pending";
      await existingRecord.save();

      return res.status(200).json({
        message: `the follow request sent again to the ${followeeUsername}`,
        follow: existingRecord,
      });
    }
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
    status: "pending",
  });

  return res.status(201).json({
    message: `Request sent to ${followeeUsername}`,
    follow: followRecord,
  });
}
async function unfollowUserController(req,res){

    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    if(followerUsername === followeeUsername){
        return res.status(400).json({
            message:"You cannot unfollow yourself"
        })
    }

    const existingRecord = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    });

    if(!existingRecord){
        return res.status(404).json({
            message:"No follow relationship exists"
        })
    }

    if(existingRecord.status === "accepted"){
        await existingRecord.deleteOne();
        return res.status(200).json({
            message:`You unfollowed ${followeeUsername}`
        })
    }

    if(existingRecord.status === "pending"){
        await existingRecord.deleteOne();
        return res.status(200).json({
            message:`Follow request cancelled`
        })
    }

    if(existingRecord.status === "rejected"){
        return res.status(409).json({
            message:"Request already rejected"
        })
    }
}
async function getAllPendingRequestsController(req, res) {
  const username = req.user.username;

  const pendingRequests = await followModel.find({
    followee: username,
    status: "pending",
  });
  if (pendingRequests.length === 0) {
    return res.status(200).json({
      message: "no pending follow requests",
    });
  }

  res.status(200).json({
    message: "pending follow requests fetched successfully",
    pendingRequests,
  });
}
async function acceptRequestController(req, res) {
  const followeeUsername = req.user.username;
  const followerUsername = req.params.username;

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "you can not accept request from yourself",
    });
  }

  const isUserExists = await userModel.findOne({
    username: followerUsername,
  });

  if (!isUserExists) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const followRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!followRequest) {
    return res.status(404).json({
      message: "user has not sent you a follow request yet!",
    });
  }
  if (followRequest.status === "accepted") {
    return res.status(200).json({
      message: `you have already accepted the follow request from ${followerUsername}`,
    });
  }

  if (followRequest.status === "rejected") {
    return res.status(200).json({
      message: `you have already rejected the follow request from ${followerUsername}`,
    });
  }

  followRequest.status = "accepted";
  await followRequest.save();

  res.status(200).json({
    message: `you accepted the follow request from ${followerUsername}`,
    followRequest,
  });
}
async function rejectRequestController(req, res) {
  const followerUsername = req.params.username;
  const followeeUsername = req.user.username;

  if (followerUsername === followeeUsername) {
    return res.status(400).json({
      message: "you can not reject the reuest from yourself",
    });
  }

  const isUserExists = await userModel.findOne({
    username: followerUsername,
  });

  if (!isUserExists) {
    return res.status(404).json({
      message: "the username is not exists",
    });
  }

  const rejectRequest = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!rejectRequest) {
    return res.status(404).json({
      message: "user has not sent you a follow request yet!",
    });
  }
  if (rejectRequest.status === "accepted") {
    return res.status(409).json({
      message: "you accepted the request so you can not reject the request.",
    });
  }

  if (rejectRequest.status === "rejected") {
    return res.status(200).json({
      message: "you already rejected the request",
    });
  }
  rejectRequest.status = "rejected";
  await rejectRequest.save();
  res.status(200).json({
    message: `you rejected the follow request from ${followerUsername}`,
    rejectRequest,
  });
}
async function getSuggestionsController(req, res) {
  try {

    const loggedInUser = req.user.username;

    const users = await userModel.find(
      { username: { $ne: loggedInUser } }, 
      {
        username: 1,
        profileImage: 1,
        bio: 1
      }
    );

    res.status(200).json({
      message: "suggestions fetched successfully",
      users
    });

  } catch (error) {

    res.status(500).json({
      message: "something went wrong",
      error: error.message
    });

  }
}
module.exports = {
  followUserController,
  unfollowUserController,
  getAllPendingRequestsController,
  acceptRequestController,
  rejectRequestController,
  getSuggestionsController
};
