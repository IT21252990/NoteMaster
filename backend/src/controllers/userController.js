const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

//@desc Register a user
//@route /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password, role } = req.body;

    if (!username || !email || !password ) {
      res.status(400);
      throw new Error(" All fields are required");
    }
  
    // Email validation
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(email)) {
      res.status(400);
      throw new Error("Invalid email format");
    }
  
    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      res.status(400);
      throw new Error(
        "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter"
      );
    }
  
    const alreadyExisted = await User.findOne({ email });
  
    if (alreadyExisted) {
      res.status(400);
      throw new Error(" User already exists");
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    console.log("Hashed Password : " + hashedPassword);
  
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
  
    console.log(`User created ${user} `);
  
    if (user) {
      res.status(201);
      res.json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error(" User not created");
    }
  });

module.exports = {
    registerUser
};