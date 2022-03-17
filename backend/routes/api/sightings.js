const express = require('express');
const asyncHandler = require('express-async-handler');
const { Sighting } = require('../../db/models');
const { User } = require('../../db/models');
const { Bird } = require('../../db/models');
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const sightings = await Sighting.findAll({ include: [{ model: User }, { model: Bird }] });

    return res.json({
      sightings,
    });
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { user_id, bird_id, address, details } = req.body;

    const postedSighting = await Sighting.create({
      user_id,
      bird_id,
      address,
      details
    })

    const sighting = await Sighting.findOne({ where: { id: postedSighting.id }, include: [{ model: User }, { model: Bird }] });

    return res.json({
      sighting
    });
  })
)

router.delete(
  '/:sightingId',
  asyncHandler(async (req, res) => {
    const sightingToDelete = req.params.sightingId;

    const sighting = await Sighting.destroy(
      { where: { id: sightingToDelete } }
    )

    return res.json({
      sighting
    });
  })
)

module.exports = router;
