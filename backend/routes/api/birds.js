const express = require('express');
const asyncHandler = require('express-async-handler');
const { Bird } = require('../../db/models');
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const birds = await Bird.findAll();

    return res.json({
      birds,
    });
  })
)

module.exports = router;
