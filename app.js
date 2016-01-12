var PouchDB = require('pouchdb')
var db = new PouchDB('http://localhost:5984/puppies')

db.info().then(function (info) {
  console.log(info)
})
