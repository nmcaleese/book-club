const mongoose = require("mongoose");

//need to connect remote server and set up mongoose implementation
//temporary database for testing
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
