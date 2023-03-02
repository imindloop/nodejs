// Core imports
const http = require('http');

// Third party imports
const express = require('express');

// Declaring the application from express
const app = express();

// Setting up the space for the middleware
app.use('/add-user', (request, response, next) => {
    response.send('The "add-user" page.');
});

// Setting up the space for the middleware
app.use('/', (request, response, next) => {
    response.send('From a first function in the middleware realm!');
});

app.use( (request,  response, next) => {
   response.send('<h1>Hello from Express Middleware.</h1>');
});

// Creating the server using express, we don't need to call createServer()!
    app.listen(3000);

