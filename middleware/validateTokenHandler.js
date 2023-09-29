const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const validateToken = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization || req.headers.Authorization;
  console.log("Token:", token);
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);
    req.user = await User.findById(decoded.id).select("-password");
    console.log("User:", req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

module.exports = validateToken;
