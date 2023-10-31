const mongoose = require("mongoose");
const ServiceSchema= mongoose.Schema({
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
const Service = mongoose.model("Service",ServiceSchema);
module.exports = Service