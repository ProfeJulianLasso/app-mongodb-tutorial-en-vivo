const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config({
    path: `./environments/${process.env.SCOPE === 'development' ? process.env.SCOPE : 'production'}.env`
});

const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// GET /api/v1/users OK
app.use('/api/v1', require('./controllers/get.users'));

// GET /api/v1/user/:id OK
app.use('/api/v1', require('./controllers/get.user'));

// POST /api/v1/user OK
app.use('/api/v1', require('./controllers/post.user'));

// PUT /api/v1/user/:id OK
app.use('/api/v1', require('./controllers/put.user'));

// PATCH /api/v1/user/:id OK
app.use('/api/v1', require('./controllers/patch.user'));

// DELETE /api/v1/user/:id OK
app.use('/api/v1', require('./controllers/delete.user'));

module.exports = app;
