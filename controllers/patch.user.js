const express = require('express');
const router = express.Router();

const User = require("../models/user.model");

// router.patch('/user/:id/name', (request, response, next) => {
//   res.send('respond with a resource');
// });

// router.patch('/user/:id/lastname', (request, response, next) => {
//   res.send('respond with a resource');
// });

// router.patch('/user/:id/email', (request, response, next) => {
//   res.send('respond with a resource');
// });

// router.patch('/user/:id/phone/:phone', (request, response, next) => {
//   res.send('respond with a resource');
// });

router.patch("/user/:id", async (request, response, next) => {
  try {
    const { name, lastName, email, phones } = request.body;

    // const data = await User.updateOne(
    //   { _id: request.params.id },
    //   { $set: { name, lastName, email, phones } }
    // );

    const data = await User.findOneAndUpdate(request.params.id, {
      name,
      lastName,
      email,
      phones
    }, { new: true });

    response.json({
      message: "User updated successfully",
      data,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
});

module.exports = router;
