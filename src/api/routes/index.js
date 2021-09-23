const express = require("express");
const router = new express.Router();

// const userRouter = require('./user')
// const donationRouter = require('./donation')
const anoCrimeRouter = require("./crime/anonymous");

// router.use('/user', userRouter)
router.use("/anoCrime", anoCrimeRouter);
// router.use('/donation', donationRouter)

module.exports = router;
