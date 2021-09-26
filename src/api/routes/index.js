const express = require("express");
const router = new express.Router();

// const userRouter = require('./user')
// const donationRouter = require('./donation')
const anoCrimeRouter = require("./crime/anonymous");
const notAnoCrimeRouter = require("./crime/notano");
const homlessRouter = require("./homeless");

// router.use('/user', userRouter)
router.use("/anoCrime", anoCrimeRouter);
router.use("/notAnoCrime", notAnoCrimeRouter);
router.use("/homeless", homlessRouter);
// router.use('/donation', donationRouter)

module.exports = router;
