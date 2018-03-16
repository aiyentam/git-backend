const mongoose = require('../models/gif')

mongoose.Promise = Promise

const uri = 'mongodb://localhost/gaphy'

mongoose
  .connect(uri, {useMongoClient: true})
  .then(connection => console.log('Connected', connection))
  .catch(connectionError => console.log('Connection failed', connectionError))

module.exports = mongoose