module.exports = app => {
    const tasks = require("../controllers/task.controller");
    var router = require("express").Router();
    // Create a new Task
    router.post("/", tasks.create);
    // Retrieve all Task
    router.get("/", tasks.findAll);
    // // Retrieve all published Task
    // router.get("/published", tasks.findAllPublished);
    // // Retrieve a single Task with id
    // router.get("/:id", tasks.findOne);
    // // Update a Task with id
    // router.put("/:id", tasks.update);
    // Delete a Task with id
    router.delete("/:id", tasks.delete);
    // // Create a new Task
    // router.delete("/", tasks.deleteAll);

    // Root URL for Task Endpoint
    app.use('/api/tasks', router);
  };