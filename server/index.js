//Bringing in the backend dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Creating a new instance of an express app
const app = new express();

//Bringing in access to messages from database
const messagesObj = require('./db/messages.js');


/**
 * Middleware - Adds additional functionality to an express app
 * Morgan - an http request logger. Logs incoming requests, makes it easier to debug
 */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

//Basic GET route
app.get('/', (req, res) => {

    /**
     * When a GET request comes into the app on the url '/', 
     * this function will run. 
     * For now, we are just sending back a simple json response saying:
     * "Fullstack message board"
     */
    res.json({
        message: 'Fullstack message board!!!'
    })

});

//Express route that gets all of our messages
app.get('/messages', (req, res) => {

    //This gets all the messages and sends back a json file with the messages array
   messagesObj.getAllMessages().then((messages) =>{
       res.json(messages);
   });

});

//Express route to add a message to our database
app.post('/messages', (req, res) =>{

    const msg = req.body;
    console.log(msg);
    messagesObj.addMessage(msg).then(() => {
        res.json(message);
    }).catch((err) => {
        res.status(500);
        res.json(err);
    });
});

/**
 * Port on which our server will run on;
 * Heroku's port || port 1660
 */
const port = process.env.PORT || 1660;

//Starts up my server at port [Heroku's port || 1660]
app.listen(port, () => console.log(`Server started on port ${port}`));