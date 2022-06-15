const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.delete('/user/:id', async (request, response, next) => {
  try {
    const data = await User.findByIdAndDelete(request.params.id);
    response.json({
      message: 'User deleted successfully',
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