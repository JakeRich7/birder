const express = require('express');
const asyncHandler = require('express-async-handler');
const { Sighting } = require('../../db/models');
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const sightings = await Sighting.findAll();

    return res.json({
      sightings,
    });
  })
)

module.exports = router;
