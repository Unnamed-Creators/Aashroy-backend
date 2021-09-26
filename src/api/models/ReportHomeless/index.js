const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const homelessSchema = Schema(
  {
    NeighbourhoodName: {
      type: String,
      required: true,
    },
    Landmark: {
      type: String,
    },
    CityTown: {
      type: String,
      required: true,
    },
    District: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    photoProof: {
      type: Buffer,
    },
  },
  { timeStamp: true }
);

module.exports = Homeless = model("Homeless", homelessSchema);
