const { NotAnoCrime } = require("../../models");

const { serverError } = require("../../utils");
const upload = require("../../utils/fileUpload");
const notAnoCrimeController = {
  createNotAnoCrime: async (req, res) => {
    try {
      const {
        fullName,
        phone,
        address,
        categoryOfCrime,
        appDate,
        stateOrUts,
        district,
        policeStation,
        additionalInfo,
        suspectDetails,
        nearbyNGO,
        photoOfSuspect,
        otherInfoOrDetails,
      } = req.body;
      const notAnoCrime = new NotAnoCrime({
        name: fullName,
        phoneNo: phone,
        address: address,
        typeOfCrime: categoryOfCrime,
        dateOfCrime: appDate,
        state: stateOrUts,
        district: district,
        policeStation: policeStation,
        additionalInfo: additionalInfo,
        susName: suspectDetails,
        nearbyNGO: nearbyNGO,
        photographSus: photoOfSuspect,
        susInfo: otherInfoOrDetails,
      });
      await notAnoCrime.save();
      res.status(200).json({ message: "Complaint Filed" });
    } catch (error) {
      console.log(error.message);
    }
  },

  getNotAnoCrime: async (req, res) => {
    try {
      const crimes = await NotAnoCrime.find().sort({ createdAt: "-1" });
      if (!crimes || !crimes.length) res.send({ message: "Crimes not found!" });
      else res.json({ crimes });
    } catch (error) {
      res.send({ message: "Internal Server Error" });
      console.log(error.message);
    }
  },

  //   updateCrime: async (req,res) => {
  //       try {

  //       } catch (error) {

  //       }
  //   },

  deleteNotAnoCrime: async (req, res) => {
    try {
      const id = req.params._id;
      await NotAnoCrime.findByIdAndDelete(id);
      res.send({ message: "Complaint Deleted" });
    } catch (error) {
      res.send({ message: "Internal Server Error" });
      console.log(error.message);
    }
  },

  // crimeDuration: async (req, res, next) => {
  //   try {
  //     const { from, to } = req.body;

  //     const crimes = await Crime.find({
  //       date: {
  //         $gte: new Date(from),
  //         $lt: new Date(to),
  //       },
  //     });

  //     res.status(200).json({
  //       crimes,
  //     });
  //   } catch (error) {
  //     res.status(500).json(serverError);
  //   }
  // },
};

module.exports = notAnoCrimeController;
