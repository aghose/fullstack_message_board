//Bringing in the backend dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Creating a new instance of an express app
const app = new express();

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

/**
 * Port on which our server will run on;
 * Heroku's port || port 1660
 */
const port = process.env.PORT || 1660;

//Starts up my server at port [Heroku's port || 1660]
app.listen(port, () => console.log(`Server started on port ${port}`));