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

router.put(
  '/',
  asyncHandler(async (req, res) => {
    const { id, body } = req.body;

    const comment = await Comment.findByPk(id);
    comment.set({
      body: body,
    });

    await comment.save();

    return res.json({
      comment
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
