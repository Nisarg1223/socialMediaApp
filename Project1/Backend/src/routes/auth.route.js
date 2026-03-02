const express = require("express");
const identifyUser = require('../middlewares/auth.middleware.js')
const Router = express.Router();
const authController = require('../controllers/auth.controller.js')
Router.post("/register",authController.registercontroller)


Router.post('/login',authController.logincontroller)

Router.get('/get-me',identifyUser,authController.getMeController)

module.exports = Router