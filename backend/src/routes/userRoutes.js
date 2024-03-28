const express = require('express');
const router = express.Router();
const {registerUser , loginUser, currentuser , allUsers} = require('../controllers/userController');
const validateToken = require('../middlewares/validateTokenHandler');

//Register a new user
router.post("/register" , registerUser);

//Login a user
router.post("/login" , loginUser);

//Get the current user
router.get("/currentuser" ,validateToken, currentuser);

//get the all users
router.get("/allusers" ,validateToken, allUsers);

module.exports = router;