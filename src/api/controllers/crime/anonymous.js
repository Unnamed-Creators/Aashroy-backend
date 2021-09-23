const { AnoCrime } = require("../../models");

const { serverError } = require("../../utils");
const upload = require("../../utils/fileUpload");
const anoCrimeController = {
  createCrime: async (req, res) => {
    try {
      const {
        crime,
        Date,
        State,
        District,
        Reason,
        AdditionalInfo,
        SuspectName,
        NearbyNGO,
        SusInfo,
      } = req.body;
      const anoCrime = new AnoCrime({
        typeOfCrime: crime,
        dateOfCrime: Date,
        state: State,
        district: District,
        reason: Reason,
        additionalInfo: AdditionalInfo,
        suspectName: SuspectName,
        susInfo: SusInfo,
        nearbyNGO: NearbyNGO,
      });
      await anoCrime.save();
      res.status(200).json({ message: "Complaint Filed" });
    } catch (error) {
      console.log(error.message);
    }
  },

  getCrime: async (req, res) => {
    try {
      const crimes = AnoCrime.find().sortBy({ createdAt: -1 });
      if (!crimes) res.send({ message: "Crimes not found!" });
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

  deleteCrime: async (req, res) => {
    try {
      const id = req.params._id;
      await AnoCrime.findByIdAndDelete(id);
      res.send({ message: "Complaint Deleted" });
    } catch (error) {
      res.send({ message: "Internal Server Error" });
      console.log(error.message);
    }
  },

  crimeDuration: async (req, res, next) => {
    try {
      const { from, to } = req.body;

      const crimes = await Crime.find({
        date: {
          $gte: new Date(from),
          $lt: new Date(to),
        },
      });

      res.status(200).json({
        crimes,
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },
};

module.exports = anoCrimeController;
