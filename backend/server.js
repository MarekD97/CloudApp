const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

////Drop the table if it already exist
//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "FIFA 2021 Complete Player Dataset. This Data set contains data of the players in FIFA-2021.",
  });
});

require("./app/routes/player.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
