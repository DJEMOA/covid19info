//load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//Create HTTP server
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //Send the response body "Hello World"
    res.end('Hello World\n');
});

//Print a log once the server starts linstening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})