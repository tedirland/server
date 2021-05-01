const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")

// @route GET api/counties
//@desc Test route
//@ access Public
router.get("/", (req, res) => res.send("County Route"))

// @route POST api/counties
//@desc Create new county
//@ access Public
router.post(
  "/",
  [check("name", "County name is required!").not().isEmpty()],
  (req, res) => {
    const errors = validationResult(req)
    res.send("County Route")
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
)

module.exports = router
