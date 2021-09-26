const express = require("express");
const router = new express.Router();

// const userRouter = require('./user')
// const donationRouter = require('./donation')
const anoCrimeRouter = require("./crime/anonymous");
const notAnoCrimeRouter = require("./crime/notano");
const homlessRouter = require("./homeless");
const userRouter = require("./user");

// router.use('/user', userRouter)
router.use("/anoCrime", anoCrimeRouter);
router.use("/notAnoCrime", notAnoCrimeRouter);
router.use("/homeless", homlessRouter);
router.use("/user", userRouter);
// router.use('/donation', donationRouter)

module.exports = router;
