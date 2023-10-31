const mongoose = require("mongoose");
const UserSchema= mongoose.Schema({
    firstname:{
        type: String,
        require : true,
    },
    lastname:{
        type: String,
        require : true,
    },
    email:{
        type: String,
        require : true,
        unique: true,
    },
    role:{
        type: String,
        default: "user",
    },
    active:{
        type: Boolean,
        default: true,
    },
    current_password:{
        type: String,
        require : true,
    },
    avatar:{
        type: String,
    },
    create_at:{
        type: Date,
        default: Date.now,
    }
});
const User = mongoose.model("User",UserSchema);
module.exports = User