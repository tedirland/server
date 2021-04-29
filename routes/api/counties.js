const express = require("express")
const router = express.Router()

// @route GET api/counties
//@desc Test route
//@ access Public
router.get("/", (req, res) => res.send("County Route"))

module.exports = router
