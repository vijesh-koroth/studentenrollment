const mongoose = require('mongoose');

const dbURI =
  'mongodb+srv://student:Eyw459Jux940diVQ@cluster0.ci0ji.mongodb.net/student?retryWrites=true&w=majority';

  const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
};

// Establishing connectin with dbURI and option with max pool

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting Database instance due to: ', err);
  }
);


/*const mongoose = require("mongoose");

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://student:Eyw459Jux940diVQ@cluster0.ci0ji.mongodb.net/data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("student").collection("student_record");
  // perform actions on the collection object
  client.close();
}); 
*/
// require any models
require('../models/Studentrecord');
