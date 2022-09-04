const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Tasks
const TaskSchema = new Schema(
    {
        task_name: {
            type: String,
            required: true
        },
        day_and_time: {
            type: String,
            required: true
        },
        reminder: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
);

// Create model for Task
const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task;