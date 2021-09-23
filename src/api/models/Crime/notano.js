const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const notAnoCrimeSchema = Schema(
  {
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
      trim: true,
      required: true,
    },
    reason: {
      type: String,
      trim: true,
      required: true,
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
    suspectName: {
      type: String,
      trim: true,
    },
    nearbyNGO: {
      type: String,
      required: true,
    },
    uploadFile: {
      type: file,
      required: true,
    },
    susInfo: {
      type: String,
      trim: true,
    },
  },
  { timeStamp: true }
);

module.exports = NotAnoCrime = model("NotAnoCrime", notAnoCrimeSchema);
