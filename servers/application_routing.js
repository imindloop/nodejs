const http = require('http');

const routes = require('../routes.js');

/* This is pretty darn confusing, we're not passing the request and response objects
 * and it is because we're only passing a reference to the function, we're not calling the
 * function ourselves, the function is going to be called by node itself, and as so
 * he's going to automatically pass the request and response objects, it's kind of a IOC 
 * inversion of control where the framework itself is taking care of dependencies.
 */
const server = http.createServer(routes);

server.listen(3000);