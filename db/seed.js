const mongoose = require('./connection')
const seeds = require('./seeds')
const Gifs = mongoose.model('Gifs')

mongoose.Promise = Promise

Gifs.remove({}).then(_ => {
  Gifs.collection.insert(seeds)
    .then(seedEntry => {
      console.log(seedEntry)
      mongoose.connection.close()
    })
})