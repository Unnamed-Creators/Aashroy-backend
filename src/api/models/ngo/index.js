const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema, model } = mongoose;

const jwt = require("jsonwebtoken");

const NGOSchema = Schema({
  applicantOrganaization: {
    type: String,
    trim: true,
    required: true,
  },
  headOfOrganaization: {
    type: String,
    trim: true,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  emailID: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },

  fullAddress: {
    type: String,
    required: true,
    trim: true,
  },
  neighbourName: {
    type: String,
    required: true,
    trim: true,
  },
  landmark: {
    type: String,
    required: true,
    trim: true,
  },
  cityOrTown: {
    type: String,
    required: true,
    trim: true,
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
  policeStation: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  bankAccNumber: {
    type: Number,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  ifsc: {
    type: Number,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  bankBranch: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  identityProof: {
    type: String,
    required: true,
  },
  uploadFile: {
    type: String,
    required: true,
  },
  addressProof: {
    type: String,
    required: true,
  },
  addressProofUploadFile: {
    type: String,
    required: true,
  },
  passport: {
    type: String,
    required: true,
  },
  regOfficeAddressProof: {
    type: String,
    required: true,
  },
  cancelledCheque: {
    type: String,
    required: true,
  },
});

// methods and statics

NGOSchema.methods.generateAuthToken = async function (next) {
  const NGO = this;

  const token = await jwt.sign(
    { _id: NGO._id.toString() },

    process.env.NGO_TOKEN_SECRET
  );

  return token;
};

NGOSchema.statics.findByCredentials = async (emailID, password) => {
  const NGO = await NGO.findOne({ emailID });

  if (!NGO) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, NGO.password);

  if (!isMatch) {
    return null;
  }
  return NGO;
};

NGOSchema.pre("save", async function (next) {
  const NGO = this;

  if (NGO.isModified("password")) {
    NGO.password = await bcrypt.hash(NGO.password, 10);
  }

  next();
});

module.exports = NGO = model("NGO", NGOSchema);
