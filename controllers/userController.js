const mongoose = require("mongoose");
const { User, Crawl } = require("../models");
const jwt = require("jsonwebtoken");
const validateLoginInput = require("../helpers/loginValidator");
const validateRegisterInput = require("../helpers/registrationValidator");
// Require the secret sauce
const jwtSecret = process.env.JWTSECRET;

module.exports = {
  // searchUserCrawls: (req, res) => {
  //   const userID = req.params.id;
  //   User.find({_id: userID}).then(user => {

  //   })
  // },
  getAll: (req, res) => {
    User.find({})
      .then(user => res.render(user))
      .catch(err => res.json(err));
  },
  findById: (req, res) => {
    User.find({ _id: req.params.id })
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },
  deleteById: (req, res) => {
    User.deleteOne({ id: req.params.id })
      .then(user =>
        res
          .status(200)
          .json({ message: `deleted the user # ${req.params.id}`, ...user })
      )
      .catch(err => res.status(500).json(err));
  },
  login: (req, res) => {

    console.log("login called")
    const { errors, isValid } = validateLoginInput(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //short hand for email:email
    const { email, password } = req.body;
    let isMatch = true;
    User.findOne({ email }).then(user => {
      if(!user) {
        return res.json("user not found")
      } else if (user.password !== password) {
        return res.json("incorrect password")
      } else {
        res.json(user)
      }
    })

    // User.findOne({ email }).then(user => {
    //   //check for user
    //   if (!user) {
    //     errors.user = "User not found";
    //     return res.status(404).json(errors);
    //   } else if (password !== user.password) {
    //     isMatch = false
    //   }
    //   if (isMatch) {
    //     const payload = {
    //       id: user.id,
    //       email: user.email,
    //       name: user.name
    //     }; // created JWT payload
    //     jwt.sign(
    //       payload,
    //       jwtSecret,
    //       {
    //         expiresIn: 720000
    //       },
    //       (err, token) => {
    //         res.json({
    //           success: true,
    //           token: "Bearer " + token,
    //           id: payload.id
    //         });
    //       }
    //     );
    //   } else {
    //     errors.password = "Password incorrect";
    //     return res.status(400).json(errors);
    //   }
    // });
  },

  register: (req, res) => {
    console.log("called");
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(errors, isValid);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email, name, password, crawls } = req.body;
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.email = "email already registered";
        return res.json(errors);
      } else {
        //es6 short hand for name:name, email:email etc.
        const newUser = new User({
          name,
          email,
          password,
          crawls
        })
          .save()
          .then(user => res.status(201).json(user))
          .catch(err => {
            console.log(err);
            return res.status("500").json({
              login: "an error has occurred in the registration process"
            });
          });
      }
    });
  },
  createCrawl: (req, res) => {
    const { title, crawl_location, authorID, venues, date_created } = req.body

    const newCrawl = new Crawl({
      title,
      crawl_location,
      venues,
      authorID,
      date_created
    })

    Crawl.create(newCrawl).then(savedCrawl => {
      User.updateOne(
        {_id: authorID },
        { $push: {crawls: savedCrawl._id}}
      ).then(updatedUser => {
        if(!updatedUser) {
          console.log("No user found")
        } else {
          res.json({savedCrawl, updatedUser})
        }
      })
      // User.updateOne(
      //   { _id: authorID },
      //   { $push: { crawls: crawl._id } }
      // ).then(updatedUser => {
      //   if(!updatedUser) {
      //     console.log("No user found")
      //   } else {
      //     res.json(updatedUser)
      //   }
      // }).catch(err => console.log(err))
    })
  },
  searchForCrawl: (req, res) => {
    const crawlID = req.params.crawlID
    Crawl.findById(crawlID).then(crawl => {
      if(!crawl) {
        console.log("no crawl found")
      } else {
        res.json(crawl)
      }
    })
  }
};