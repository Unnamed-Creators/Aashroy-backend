const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const anoCrimeSchema = Schema(
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
      type: String,
      required: true,
    },
    susInfo: {
      type: String,
      trim: true,
    },
  },
  { timeStamp: true }
);

module.exports = AnoCrime = model("AnoCrime", anoCrimeSchema);
