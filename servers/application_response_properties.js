const http = require('http');

const server = http.createServer( (request, response) => {

    let number = request.url.substring(1, request.url.length);
    let result = number * number;

    // Setting a header for the content type
    response.setHeader('Content-Type', 'text/html');

    // Outputting the headers on the response
    console.log(response.getHeaders());

    // Writting some content to the response in ACTUAL HTML! :O
    response.write('<html>');
    response.write('<head><title>Working with responses</title></head>');
    response.write('<body>');
    response.write('<p> The square of: ' + number + ' is: ' + result + '</p>');
    response.write('</body>');
    response.write('</html>');

    // After this we cannot change the response, not even after doing another .write()
    response.end();

});

server.listen(3000);