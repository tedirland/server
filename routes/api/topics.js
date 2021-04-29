const express = require("express")
const router = express.Router()

// @route GET api/topics
//@desc Test route
//@ access Public
router.get("/", (req, res) => res.send("Topic route"))

module.exports = router
