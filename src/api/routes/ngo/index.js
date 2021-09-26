const express = require("express");

const { ngoController } = require("../../controllers");
const { createNGO, getNGO, getAllNGO, updateNGO, deleteNGO, loginNGO } =
  ngoController;

const router = new express.Router();

/* @get */
router.get("/", getAllNGO);

router.get("/:_id", getNGO);

/* @post */
router.post("/register", createNGO);

/* @post */
router.post("/login", loginNGO);

/* @patch */
router.patch("/:_id", updateNGO);

/* @delete */
router.delete("/:_id", deleteNGO);

module.exports = router;
