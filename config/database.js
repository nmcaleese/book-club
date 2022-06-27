const mongoose = require('mongoose')

//need to connect remote server and set up mongoose implementation
//temporary database for testing
mongoose.connect('mongodb://127.0.0.1:27017/books')

// shortcut to mongoose.connection object
const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})