const mongoose = require("mongoose");
const QuizSchema= mongoose.Schema({
    serviceName:{
        type: String,
        require : true,
    },
    ServiceDescription:{
        type: String,
        require : true,
    },
    active:{
        type: Boolean,
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
const Quiz = mongoose.model("Quiz",QuizSchema);
module.exports = Quiz