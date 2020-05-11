const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: String,
        trim: true,
        unique: 1
    }
});

const User = mongoose.model('users', userSchema);

module.exports = { User }
