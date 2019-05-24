const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

let validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    quantity: Number,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email adress is required",
    validate: [validateEmail, "Please fill a valid email adrress"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    type: String,
    required: true
  },
  crawls: {
    type: Array
  }
});

// userSchema.methods.comparePassword = function(candidatePassword) {
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//       if (err) reject(err, "passwords not a match");
//       return resolve(isMatch);
//     });
//   });
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
