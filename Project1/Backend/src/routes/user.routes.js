const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller.js');
const identifyUser = require('../middlewares/auth.middleware.js');
const userModel = require('../models/user.model.js');

// /api/users/follow/:userid
userRouter.post('/follow/:username', identifyUser, userController.followUserController)

// /api/users/unfollow/:userid
userRouter.post('/unfollow/:username', identifyUser, userController.unfollowUserController)


// /api/users/getallpendingrequests
userRouter.get('/getallpendingrequests', identifyUser, userController.getAllPendingRequestsController);


// /api/users/acceptrequest/:username
userRouter.patch('/acceptrequest/:username',identifyUser,userController.acceptRequestController);

// /api/users/rejectrequest/:username
userRouter.patch('/rejectrequest/:username',identifyUser,userController.rejectRequestController)
module.exports = userRouter;