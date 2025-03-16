const http = require('http');


const requestListener = (request, response) => {
response.setHeader('Content-Type', 'text/html');
response.statusCode = 200;
const { method } = request;

if(method === 'GET') {
    response.end('<h1>GET request received</h1>');
}
if(method === 'POST'){
    response.end('<h1>POST request received</h1>');
}
if(method === 'PUT'){
    response.end('<h1>PUT request received</h1>');
}
if(method === 'DELETE'){
    response.end('<h1>DELETE request received</h1>')
}

}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host,() => {
    console.log(`Server running on http://${host}:${port}`);
})