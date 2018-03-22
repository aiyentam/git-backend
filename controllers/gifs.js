const express = require("express");
const mongoose = require("../db/connection");

const Gifs = mongoose.model("Gifs");

const router = express.Router();

router.get("/", (req, res) => {
  Gifs.find({}).then(gifs => {
    console.log(gifs);
    res.json(gifs);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newGif = {
    name: req.body.uploadedImg.name,
    url: req.body.uploadedImg.imgUrl
  };
  Gifs.create(newGif).then(gifs => {
    Gifs.find({}).then(gifs => res.json(gifs));
  });
});

router.put("/:id", (req, res) => {
  Gifs.findOneAndUpdate({ _id: req.params.id }, req.body).then(gifs => {
    Gifs.find({}).then(gifs => res.json(gifs));
  });
});

router.delete("/:id", (req, res) => {
  Gifs.findOneAndRemove({ _id: req.params.id }).then(gifs => {
    Gifs.find({}).then(gifs => res.json(gifs));
  });
});

module.exports = router;
