
const express = require('express');

const app = express();

app.use('/users', (request, response) => {
    response.send('Users can be created here! Exciting right?!');
});

app.use('/', (request, response, next) => {
    console.log('Hi! from the first function.');
    next();
});


app.use('/', (request, response) => {
    console.log('Hi, from the second function.');
    response.send('<h1>We already went through the two required functions.</h1>');
});

app.listen(3000);