//Importing connection to the database, db
const db = require('./connection');
// requiring Joi to give messages some structure
const Joi = require('joi');


/**
 * Schema for messages; 
 * Messages should have the following structure (done with Joi):
 * username - default to anonymous
 * subject
 * message
 * imageURL (optional)
 * createdAt
 */
const schema = Joi.object().keys({

    username: Joi.string()
                .alphanum()
                .required(),
    
    subject: Joi.string()
                .required(),
    
    message: Joi.string()
                .max(500)
                .required(),

    imageURL: Joi.string().uri({
        scheme: [
          /https?/
        ]
    }),

});

//When called, this will get all the messages in the db
const messages = db.get('messages');


function getAllMessages() {
    console.log(`messages: ${messages}`);
    return messages.find();
}

/**
 * For adding messages into our database, "messages";
 * Messages need to follow the Schema
 */
async function addMessage(message){

    /**
     * If message is valid message, it will be added to 
     * the database, else an error is thrown and returned 
     */
    try{
        console.log('addMessage: ' + message)
        const value = await schema.validateAsync(message);
        message.createdAt = new Date();
        return messages.insert(message);
    }
    catch(err){
        console.log(err);
        return Promise.reject(err);
    }
    
}

function removeMessage(obj){
    return messages.remove(obj);
}

module.exports = {
    getAllMessages,
    addMessage
};