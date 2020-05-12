const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: String,
        trim: true,
        unique: 1
    }
}, { versionKey: false });

const User = mongoose.model('users', userSchema);

module.exports = { User }
