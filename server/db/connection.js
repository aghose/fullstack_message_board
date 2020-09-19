// Require monk and mongo to connect to MongoDB
const mongo = require('mongodb');
const monk = require('monk');

const dbName = "/messages"
const uri = "mongodb+srv://aghose001:aghose001@cluster0.p4dgu.azure.mongodb.net/test?retryWrites=true&w=majority"
const connectionString = uri + dbName;

// This should connect up to the MongoDB database
const db = monk(connectionString);
//This verifies connection success/failure
db.then(() =>{
    console.log("connection success");
  }).catch((e)=>{
    console.error("Error !",e);
  });

//Exporting db so that it can used in other files
module.exports = db; 