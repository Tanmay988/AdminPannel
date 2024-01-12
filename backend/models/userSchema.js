const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Inavlid Email!!!"],
  },
  phone: {
    type: String,
    required: true,
    unique: [true, "This number is already used"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "password contains atleast 6 characters"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// hashing a password
userSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified("password")) {
      return next();
    }

    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
    return next();
  } catch (e) {
    return next(e);
  }
});

//generation of web token
userSchema.methods.getToken = async function () {
  try {
    const token = await jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );

    return token;
  } catch (e) {
    console.log(`jwt error ${e}`);
  }
};
// define collection
const User = mongoose.model("User", userSchema);
module.exports = User;
