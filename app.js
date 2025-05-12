const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;


    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (path === "/comprobar") {
        let queryString = query.variant.toLowerCase();

        if (isPalindrome(queryString) === true) {
            res.writeHead(200, 'Content-Type', 'text/html; charset=utf-8');
            res.write(`La palabra ${queryString} es un palíndromo`);
            res.end();
            return;
        } else {
            res.writeHead(200, 'Content-Type', 'text/html; charset=utf-8');
            res.write(`La palabra ${queryString} no es un palíndromo`);
            res.end();
            return;
        }
    }

});

server.listen(3000, () => {
    console.log("Listening to requests for 3400 port");
})

function isPalindrome(str) {
    const net = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invers = net.split('').reverse().join('');
    return net === invers;
}