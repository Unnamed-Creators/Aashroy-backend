const express = require("express");
const upload = require("../../utils/fileUpload");
const { homelessController } = require("../../controllers");
const { createHomeless, getHomeless } = homelessController;

const router = new express.Router();

/* @get */
router.get("/", getHomeless);

/* @post */
router.post("/report", upload.single("upload"), createHomeless);
// router.post("/crimeDuration", crimeDuration);

/* @patch */
// router.patch('/', updateCrime)

/* @delete */
// router.delete('/', deleteCrime)

module.exports = router;
