const express = require("express");

const { userController } = require("../../controllers");
const { createUser, getUser, getAllUser, updateUser, deleteUser, loginUser } =
  userController;

const router = new express.Router();

/* @get */
router.get("/", getAllUser);

router.get("/:_id", getUser);

/* @post */
router.post("/register", createUser);

/* @post */
router.post("/login", loginUser);

/* @patch */
router.patch("/:_id", updateUser);

/* @delete */
router.delete("/:_id", deleteUser);

module.exports = router;
