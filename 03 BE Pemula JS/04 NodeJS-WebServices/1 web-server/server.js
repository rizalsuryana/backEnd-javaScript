const http = require('http');


const requestListener = (request, response) => {
response.setHeader('Content-Type', 'application/json');
response.setHeader('Powered-By', 'Node.js');
const { method, url } = request;

if(url === '/') {
    // TODO 2: Logika respons bila url bernilai '/'
    if(method === 'GET') {
        response.end('<h1>Ini adalah homepage</h1>')
        // status code
        response.statusCode = 200;
    } else {
     // status code
     response.statusCode = 400;
        response.end(`Halaman tidak dapat diakses dengan ${method} request`)
    }

} else if(url === '/about') {
    // TODO 3: Logika respons bila url bernilai '/about'
    if(method === 'GET') {
        // status code
        response.statusCode = 200;
        response.end('<h1> Hallo ini adalah halaman about </h1>');
    } else if(method=== 'POST') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
                    // status code
        response.statusCode = 200;
            response.end(`<h1>Hai ${name}! ini adalah halaman about</h1>`)
        })
     } else {
             // status code
     response.statusCode = 400;
        response.end(`<h1>Halaman ini tidak datap diakses dengan ${method} request</h1>`)
     }


} else {
                 // status code
                 response.statusCode = 404;
    // TODO 1: Logika respons bila url bukan '/' atau '/about'
    response.end('<h1>Halaman tidak ditemukan !</h1>')
}

}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host,() => {
    console.log(`Server running on http://${host}:${port}`);
})





// URL: ‘/’
// Method: GET
// Mengembalikan “Ini adalah homepage”.
// Method: <any> (selain GET)
// Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.
// URL: ‘/about’
// Method: GET
// Mengembalikan “Halo! Ini adalah halaman about”.
// Method: POST (dengan melampirkan data name pada body)
// Mengembalikan “Halo, <name>! Ini adalah halaman about”.
// Method: <any> (selain GET dan POST)
// Mengembalikan “Halaman tidak dapat diakses dengan <any> request”.
// URL: <any> (selain / dan /about)
// Method: <any>
// Mengembalikan “Halaman tidak ditemukan!”.