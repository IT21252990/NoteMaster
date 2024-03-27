const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true , "This Email was already taken !"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin' , 'User']
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;