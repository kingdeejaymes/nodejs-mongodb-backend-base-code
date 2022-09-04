const Task = require("../models/task.model.js");

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.task_name) {
    res.status(400).send({ message: "Task Name can not be empty!" });
    return;
  }
  // Create a Task
  const task = new Task({
    task_name: req.body.task_name,
    day_and_time: req.body.day_and_time,
    reminder: req.body.reminder ? req.body.reminder : false
  });

  // Save Task in the database
  task
    .save(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
};
// Retrieve all Task from the database.
exports.findAll = (req, res) => {

    //Task.find({ published: true }) // Can have filters based on field
    Task.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
  
};
// Find a single Task with an id
exports.findOne = (req, res) => {
  
};
// Update a Task by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log('ID TO BE DELETED ==> ', id);
    Task.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: 'Cannot delete Task with id=${id}. Task was not found!'
          });
        } else {
          res.send({
            message: "Task was deleted successfully!"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: "Could not delete Task with id=" + id
        });
      });
};
// Delete all Task from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Task
exports.findAllPublished = (req, res) => {
  
};