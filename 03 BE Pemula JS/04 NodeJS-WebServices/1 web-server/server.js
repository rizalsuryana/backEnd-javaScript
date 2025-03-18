const http = require('http');


const requestListener = (request, response) => {
response.setHeader('Content-Type', 'application/json');
response.setHeader('Powered-By', 'Node.js');
const { method, url } = request;

if(url === '/') {
    // TODO 2: Logika respons bila url bernilai '/'
    if(method === 'GET') {
        response.end(JSON.stringify({
            message: 'Ini adalah Homepage',
        }))
        response.statusCode = 200;
    } else {
     response.statusCode = 400;
        response.end(JSON.stringify({
            message: `Halaman tidak dapat diakses dengan ${method} request`,
        }));
    }

} else if(url === '/about') {
    // TODO 3: Logika respons bila url bernilai '/about'
    if(method === 'GET') {
        response.statusCode = 200;
        response.end(JSON.stringify({
            message: 'Hallo ini adalah halaman about',
        }));
    } else if(method=== 'POST') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
        response.statusCode = 200;
            response.end(JSON.stringify({
                message: `Hai ${name}! ini adalah halaman about`,
            }))
        })
     } else {
     response.statusCode = 400;
        response.end(JSON.stringify({
            message: `Halaman ini tidak datap diakses dengan ${method} request`,
        }))
     }

} else {
                 // status code
                 response.statusCode = 404;
    // TODO 1: Logika respons bila url bukan '/' atau '/about'
    response.end(JSON.stringify({
        message: 'Halaman tidak ditemukan !',
    }))
}

}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host,() => {
    console.log(`Server running on http://${host}:${port}`);
})
