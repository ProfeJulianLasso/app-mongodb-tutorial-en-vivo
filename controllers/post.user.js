const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.post('/user', async (request, response, next) => {
  try {
    const { name, lastName, email, phones } = request.body;
    const user = new User({ name, lastName, email, phones });
    const data = await user.save();
    response.json({
      message: 'User created successfully',
      data
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      stack: error.stack
    });
  }
});

module.exports = router;
