const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModelShema = new Schema({
    _id: {
        type: String,
        required: true,
        default: () => {
            return uuid.v4();
        }
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be at most 50 characters long'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [3, 'Last name must be at least 3 characters long'],
        maxlength: [50, 'Last name must be at most 50 characters long'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        trim: true
    },
    phones: [{
        type: String,
        trim: true
    }]
});

const userModel = mongoose.model('User', userModelShema);
module.exports = userModel;