const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema, model } = mongoose;

const jwt = require("jsonwebtoken");

const userSchema = Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  otp: {
    type: String,
  },
});

// methods and statics

userSchema.methods.generateAuthToken = async function (next) {
  const user = this;

  const token = await jwt.sign(
    { _id: user._id.toString() },

    process.env.USER_TOKEN_SECRET
  );

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();
});

module.exports = User = model("User", userSchema);

// cryptography -> computer networks
