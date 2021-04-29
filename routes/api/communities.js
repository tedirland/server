const express = require("express")
const router = express.Router()

// @route GET api/communities
//@desc Test route
//@ access Public
router.get("/", (req, res) => res.send("Community route"))

module.exports = router
