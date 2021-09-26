const { Homeless } = require("../../models");

const { serverError } = require("../../utils");
const upload = require("../../utils/fileUpload");
const homelessCOntroller = {
  createHomeless: async (req, res) => {
    try {
      const { NeighbourhoodName, Landmark, CityTown, District, State } =
        req.body;
      const homeless = new Homeless({
        NeighbourhoodName,
        Landmark,
        CityTown,
        District,
        State,
      });
      await homeless.save();
      res.status(200).json({ message: "Complaint Filed" });
    } catch (error) {
      console.log(error.message);
    }
  },

  getHomeless: async (req, res) => {
    try {
      const homeless = await Homeless.find();
      if (!homeless || !homeless.length)
        res.send({ message: "Result not found!" });
      else res.json({ homeless });
    } catch (error) {
      res.status(505).send({ message: "Internal Server Error" });
      console.log(error.message);
    }
  },

  //   updateCrime: async (req,res) => {
  //       try {

  //       } catch (error) {

  //       }
  //   },

  deleteHomeless: async (req, res) => {
    try {
      const id = req.params._id;
      await Homeless.findByIdAndDelete(id);
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

module.exports = homelessCOntroller;
