const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { validationResult } = require('express-validator');
const { User } = require('../../db/models');

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
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Empty comments not allowed!'),
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
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Empty comments not allowed!'),
  handleValidateEditErrors
];

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll({ include: { model: User } });

    return res.json({
      comments,
    });
  })
)

router.put(
  '/',
  validateEdit,
  asyncHandler(async (req, res) => {
    const { id, body } = req.body;

    const myComment = await Comment.findByPk(id);
    myComment.set({
      body: body,
    });

    await myComment.save();

    const comment = await Comment.findOne({ where: { id: myComment.id }, include: { model: User } })

    return res.json({
      comment
    });
  })
)

router.post(
  '/',
  validatePost,
  asyncHandler(async (req, res) => {
    const { user_id, sighting_id, body } = req.body;

    const postedComment = await Comment.create({
      user_id,
      sighting_id,
      body
    })

    const comment = await Comment.findOne({ where: { id: postedComment.id }, include: { model: User } });

    return res.json({
      comment
    });
  })
)

router.delete(
  '/:commentId',
  asyncHandler(async (req, res) => {
    const commentToDelete = req.params.commentId;

    const comment = await Comment.destroy(
      { where: { id: commentToDelete } }
    )

    return res.json({
      comment
    });
  })
)

module.exports = router;
