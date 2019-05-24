const jwt = require("jsonwebtoken");
const { User } = require("../models");

// Require the secret sauce
const jwtSecret = process.env.JWTSECRET;

module.exports = (req, res, next) => {
  const useriD = req.user
  console.log(userID)
  User.findById(userId, (userErr, user) => {
    if (userErr || !user) {
      return res.status(401).json({ message: "no user found" });
    }
    // pass user details onto next route
    req.user = user;
    return next();
  });
};