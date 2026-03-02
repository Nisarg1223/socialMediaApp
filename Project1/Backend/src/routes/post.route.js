const express = require('express');
const Router = express.Router();
const postController = require('../controllers/post.controller.js');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});
const identifyUser = require('../middlewares/auth.middleware.js');

//post:- /api/posts

Router.post('/',upload.single('image'),identifyUser,postController.createPostController);

Router.get('/',identifyUser,postController.getAllPostsController);

Router.get('/details/:id',identifyUser,postController.getPostDetailsController);

//post like

Router.post('/like/:postId',identifyUser,postController.likePostController);
module.exports = Router;