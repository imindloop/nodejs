// If we were to import a custom class we would need to use a relative path, for example: ./myfile.js
const http = require('http');

// This is going to listen for request and handle them.
function requestListener(request, response) {
    console.log(request);

    console.log('exiting application.');

    // Exiting the event loop so we don't process any further requests.
    process.exit();

};

// We launch the server and assign it to a const by providing a request listener which is going to be used with every received request.
// The request listener function could've been an anonymous function as well: function(request, response) => {}
const server = http.createServer(requestListener);

// We use the launched server to listen to requests.
server.listen(3000);

