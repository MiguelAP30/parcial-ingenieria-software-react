const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    current_password: {
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
