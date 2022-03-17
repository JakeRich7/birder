const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();

    return res.json({
      comments,
    });
  })
)

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { user_id, sighting_id, body } = req.body;

    const postedComment = await Comment.create({
      user_id,
      sighting_id,
      body
    })

    const comment = await Comment.findOne({ where: { id: postedComment.id } });

    return res.json({
      comment
    });
  })
)

module.exports = router;
