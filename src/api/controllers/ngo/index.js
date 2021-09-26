const { NGO } = require("../../models");

const { serverError } = require("../../utils");

const { cookieConfig } = require("../../middlewares");

const NGOController = {
  getAllNGO: async (req, res) => {
    try {
      const NGOs = await NGO.find();
      if (!NGOs || !NGOs.length)
        return res.status(400).send({ message: "NGOs not found!" });
      else res.status(200).json(NGOs);
    } catch (error) {
      res.status(500).json(serverError);
    }
  },

  createNGO: async (req, res, next) => {
    try {
      const existNGO = await NGO.findOne({ emailID: req.body.emailID });

      if (existNGO) {
        return res.status(404).json({
          error: "NGO already exists with this email!!",
        });
      }

      const NGO = await NGO(req.body);

      await NGO.save();

      const token = await NGO.generateAuthToken();

      res.cookie("auth_abedon", token, cookieConfig);

      res.status(200).json({
        msg: "Registration Successful!!",
        NGO,
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },

  loginNGO: async (req, res, next) => {
    try {
      const { emailID, password } = req.body;

      const NGO = await NGO.findByCredentials(emailID, password);

      if (!NGO) {
        return res.status(400).json({
          error: "Invalid Credentials",
        });
      }

      const token = await NGO.generateAuthToken();

      res.cookie("auth_abedon", token, cookieConfig);

      res.status(200).json({
        msg: "Login Successful",
        NGO,
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },

  getNGO: async (req, res, next) => {
    try {
      const NGO = await NGO.findById(req.params._id);

      if (!NGO) {
        return res.status(404).json({
          error: "NGO not found",
        });
      }

      res.status(200).json({
        NGO,
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },

  updateNGO: async () => {
    try {
      const NGO = await NGO.findByIdAndUpdate(req.params._id, req.body);

      if (!NGO) {
        return res.status(404).json({
          error: "NGO not found",
        });
      }

      await NGO.save();

      res.status(200).json({
        NGO,
        msg: "NGO Updated!",
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },

  deleteNGO: async () => {
    try {
      const NGO = await NGO.findByIdAndDelete(req.params._id);

      if (!NGO) {
        return res.status(404).json({
          error: "NGO not found",
        });
      }

      res.status(200).json({
        msg: "NGO Deleted!",
      });
    } catch (error) {
      res.status(500).json(serverError);
    }
  },
};

module.exports = NGOController;
