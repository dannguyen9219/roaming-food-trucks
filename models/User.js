const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true
        }
    }
);

const Users = mongoose.model('Users', userSchema);

module.exports = Users;