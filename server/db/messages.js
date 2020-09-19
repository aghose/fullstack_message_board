//Importing connection to the database, db
const db = require('./connection');

//When called, this will get all the messages in the db
const messages = db.get('messages');


function getAllMessages() {
    console.log(`messages: ${messages}`);
    return messages.find();
}

module.exports = {
    getAllMessages
};