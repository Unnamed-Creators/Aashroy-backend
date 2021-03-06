const express = require("express");
const upload = require("../../utils/fileUpload");
const { notAnoCrimeController } = require("../../controllers");
const { createNotAnoCrime, getNotAnoCrime } = notAnoCrimeController;

const router = new express.Router();

/* @get */
router.get("/", getNotAnoCrime);

/* @post */
router.post("/fileComplaint", upload.single("upload"), createNotAnoCrime);
// router.post("/crimeDuration", crimeDuration);

/* @patch */
// router.patch('/', updateCrime)

/* @delete */
// router.delete('/', deleteCrime)

module.exports = router;
