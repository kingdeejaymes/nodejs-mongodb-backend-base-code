const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Connect to the database from the .env file containing the DB details
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
      console.log('Error in MongoDb connection: ' + err);
      process.exit();
  });

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

//Handle CORS Issue when FE access BE APIs
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "NodeJS Express Server is Up and Running!!!" });
});

require("./routes/task.route")(app);
require("./routes/fbcreds.route")(app);

try {
    // set port, listen for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
} catch(ex) {

}
