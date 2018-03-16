const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const gifController = require("./controllers/gifs");
const app = express();

const mongoose = require("./models/gif");
const Gifs = mongoose.model("Gifs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(
  ("/gifs",
  (req, res) => {
    Gifs.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
);

app.listen(3000, () => console.log("I am running"));
