const mongoose = require("mongoose");

const GifsSchema = new mongoose.Schema({
  name: String,
  url: String
});

mongoose.model("Gifs", GifsSchema);

module.exports = mongoose;
