const express = require('express');
const asyncHandler = require('express-async-handler');
const { Sighting } = require('../../db/models');
const { User } = require('../../db/models');
const { Bird } = require('../../db/models');
const { Comment } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const handleValidatePostErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
}

const validatePost = [
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Need an address'),
  check('details')
    .exists({ checkFalsy: true })
    .withMessage('Details cannot be blank'),
  handleValidatePostErrors
];

const handleValidateEditErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
}

const validateEdit = [
  check('address')
    .exists({ checkFalsy: true })
    .withMessage('Need an address'),
  check('details')
    .exists({ checkFalsy: true })
    .withMessage('Details cannot be blank'),
  handleValidateEditErrors
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const sightings = await Sighting.findAll({ include: [{ model: User }, { model: Bird }] });

    return res.json({
      sightings,
    });
  })
)

router.put(
  '/',
  validateEdit,
  asyncHandler(async (req, res) => {
    const { id, address, details } = req.body;

    const mySighting = await Sighting.findByPk(id);
    mySighting.set({
      address: address,
      details: details
    });

    await mySighting.save();

    const sighting = await Sighting.findOne({ where: { id: mySighting.id }, include: [{ model: User }, { model: Bird }] });

    return res.json({
      sighting
    });
  })
)

router.post(
  '/',
  validatePost,
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

    await Comment.destroy(
      { where: { sighting_id: sightingToDelete } }
    )

    const sighting = await Sighting.destroy(
      { where: { id: sightingToDelete } }
    )

    return res.json({
      sighting
    });
  })
)

module.exports = router;
