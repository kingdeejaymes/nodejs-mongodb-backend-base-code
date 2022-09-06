module.exports = app => {
    const fbcreds = require("../controllers/fbcreds.controller");
    var router = require("express").Router();
    // Create a new fbcreds
    router.post("/", fbcreds.saveCredentials);
    // Retrieve all fbcreds
    router.get("/", fbcreds.getAll);


    // Root URL for fbcreds Endpoint
    app.use('/api/fbcreds', router);
  };