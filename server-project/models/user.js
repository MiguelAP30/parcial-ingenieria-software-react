const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    authorized: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
