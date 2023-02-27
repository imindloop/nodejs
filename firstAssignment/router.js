

const requestListener = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write(`<html>
                            <head>
                                <title>Node Course: First Assignment</title>
                            </head>
                            <body>
                                <h1> Welcome to the first assignment! </h1>
                                <form action="/createUser" method="POST">
                                    <input type="text" name="username"/>
                                    <button type="submit">Add User</button>
                                </form>
                            </body>
                        </html>`);

        return response.end();
    } else if (url === '/users') {
        response.write(`<html>
                            <head>
                                <title>Node Course: First Assignment</title>
                            </head>
                            <body>
                                <ul>
                                    <li>User 1</li>
                                    <li>User 2</li>
                                    <li>User 3</li>
                                    <li>User 4</li>
                                    <li>User 5</li>
                                </ul>
                                <form action="/" method="POST">
                                    <button type="submit">Go back to main page.</button>
                                </form>
                            </body>
                        </html>`);
        return response.end();
    } else if (url === '/createUser' && method === 'POST') {
        
        const requestBody = [];
        let parsedBody = '';
        
        request.on('data', chunk => {
            requestBody.push(chunk);
        });

        request.on('end', () => {
            parsedBody = Buffer.concat(requestBody).toString();
            const username = parsedBody.split('=')[1];

            console.log(`New user ${username} was created.`)
        });

    }
};

module.exports = requestListener;