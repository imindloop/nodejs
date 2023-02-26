const http = require('http');
const fs = require('fs');

let messageId = 0;

const server = http.createServer( (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write(`<html>
                            <head>
                                <title>Routing App: Enter a Message</title>
                            </head>
                            <body>
                                <form action="/message" method="POST">
                                    <input type="text" name="message" id="messageId"/>
                                    <button type="submit">Send</button>
                                </form>
                            </body>
                        </html>`);
        return response.end();
    } else if (url === '/message' && method === 'POST') {

        const requestBody = [];
        let parsedBody = '';

         // Ingesting the chunks of request body coming on the stream.
        request.on('data', (chunk) => {
            console.log('Request Body so far...' + chunk);
            requestBody.push(chunk);
        });
        
        // When we finally ingested all the chunks in the stream, we can buffer the requestBody.
        request.on('end',() => {
            parsedBody = Buffer.concat(requestBody).toString();
            const message = parsedBody.split('=')[1];

            // We want to persist the message by saving it to a file.
            fs.writeFileSync('message' + messageId+1 + '-' + new Date() + '.txt', message);

            response.statusCode = 302;
            response.setHeader("location", "/");
            return response.end();

        });
    }
});

server.listen(3000);