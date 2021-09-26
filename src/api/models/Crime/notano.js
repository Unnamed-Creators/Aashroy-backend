const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const notAnoCrimeSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    typeOfCrime: {
      type: String,
      required: true,
    },
    dateOfCrime: {
      type: Date,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    policeStation: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
      required: true,
      trim: true,
    },
    susName: {
      type: String,
    },
    nearbyNGO: {
      type: String,
      required: true,
    },
    photographSus: {
      type: Buffer,
    },
    susInfo: {
      type: String,
      trim: true,
    },
  },
  { timeStamp: true }
);

module.exports = NotAnoCrime = model("NotAnoCrime", notAnoCrimeSchema);
