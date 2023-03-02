// Core imports
const http = require('http');

// Third party imports
const express = require('express');
const bodyParser = require('body-parser');

// Declaring the application from express
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (request, response) => {
    response.send(`<form action="/product" method="POST">
                        <input type="text" name="productName">
                        <button type="submit">Save</button>
                    </form>`);
});

app.get('/product', (request, response, next) => {
    console.log('We don\'t have a body because this was a GET request');
    response.redirect('/');
});

app.post('/product', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
});

app.use('/', (request, response, next) => {
    response.send('<h1>Welcome to the app</h1>');
});

// Creating the server using express, we don't need to call createServer()!
    app.listen(3000);

