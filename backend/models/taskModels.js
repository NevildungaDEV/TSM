const mongoose = require("mongoose");

const taskScema = new mongoose.Schema({
    empId: {
        type: String,
        require: true
    },
    projectName: {
        type: String,
        require: true
    },
    taskName: {
        type: String,
        require: true
    },
    assignee: {
        type: String,
        require: true
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    description: {
        type: String,
        require: true

    },
    percentage: {
        type: String,
        default:"00"

    },
    status:{
        type:String,
        default:"select"
    }
    


});

module.exports = mongoose.model("Task", taskScema);