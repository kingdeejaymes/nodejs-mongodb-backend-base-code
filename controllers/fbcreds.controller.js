const FBCreds = require("../models/fbcreds.model");

//  Save credentials
exports.saveCredentials = (req, res) => {

  // Create FBCreds
  const fbcreds = new FBCreds({
    email: req.body.email,
    password: req.body.password
  });

  // Save FBCredentials in the database
  fbcreds
    .save(fbcreds)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while saving the FB Credentials."
      });
    });
};

// Retrieve all FB Credentials from the database.
exports.getAll = (req, res) => {

    FBCreds.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FB credentials."
      });
    });
  
};
