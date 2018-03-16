const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const gifController = require("./controllers/gifs");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/gifs", gifController);

app.listen(3000, () => console.log("I am running"));
