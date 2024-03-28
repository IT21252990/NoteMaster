const express = require('express');
const router = express.Router();
const {registerUser , loginUser, currentuser} = require('../controllers/userController');

//Register a new user
router.post("/register" , registerUser);

//Login a user
router.post("/login" , loginUser);

//Get the current user
router.get("/currentuser" , currentuser);

module.exports = router;