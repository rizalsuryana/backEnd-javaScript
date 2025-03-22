const http = require('http');
const url = require('url');

// Array menus terdiri dari 5 item yang indeks ketiganya
//  ditandai dengan item yang hilang yaitu Es teh.
const menus = ['Nasi goreng', 'Mie goreng', 'Mie rebus',
    'Es teh', 'Teh tawar', ];
const MISSING = 3;

// Membuat http server
const server = http.createServer((req, res)=> {
    const { pathname } = url.parse(req.url);
    let id = pathname.match(/^\/(\d+)$/);

    if(!id) {
        res.statusCode = 400;
        return void res.end();
    }

    id = Number(id[1]);

    if (id === MISSING) {
        res.statusCode = 404;
        return void res.end();
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
        id,
        menu: menus[id % menus.length],
    }));
});

server.listen(process.env.PORT || 0, () => {
    const { port } = server.address();
    console.log(`Order service listening on localhost on port : ${port}`);
})