const express = require("express");
const upload = require("../../utils/fileUpload");
const { anoCrimeController } = require("../../controllers");
const { createCrime, getCrime } = anoCrimeController;

const router = new express.Router();

/* @get */
router.get("/", getCrime);

/* @post */
router.post("/fileComplaint", upload.single("upload"), createCrime);
// router.post("/crimeDuration", crimeDuration);

/* @patch */
// router.patch('/', updateCrime)

/* @delete */
// router.delete('/', deleteCrime)

module.exports = router;
