const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/user/:id', async (request, response, next) => {
  try {
    // const user = await User.find({_id: request.params.id});
    const data = await User.findById(request.params.id);
    if (data) {
      response.json({ data });
    } else {
      response.status(404).json({ data: 'User not found' });
    }
  } catch (error) {
    response.status(500).json({
      message: error.message,
      stack: error.stack
    });
  }
});

module.exports = router;
