const http = require('http');
const { parse } = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // const pathname = parsedUrl.pathnamename;
    // const query = parsedUrl.query;
    const { pathname, query } = parsedUrl;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (pathname === "/comprobar") {
        let palabra = query.variant.toLowerCase();
        // const {palabra} = query;
        if (isPalindrome(palabra) === true) {
            res.writeHead(200, 'Content-Type', 'text/plain; charset=utf-8');
            res.write(`La palabra ${palabra} es un palíndromo`);
            res.end();
            return;
        } else {
            res.writeHead(200, 'Content-Type', 'text/html; charset=utf-8');
            res.write(`La palabra ${palabra} no es un palíndromo`);
            res.end();
            return;
        }

    } if (pathname === "/") {

        res.writeHead(200, 'Content-Type', 'text/html; charset=utf-8');
        res.write(`<form action="/comprobar" method="GET">
            <label for="palabra">Palabra a comprobar:</label><br>
            <input type="text" id="palabra" name="palabra" value=""><br>
            <input type="submit" value="Comprobar">
            </form> `);
        res.end();
    }

});

server.listen(3000, () => {
    console.log("Listening to requests for 3000 port");
})

function isPalindrome(str) {
    const net = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invers = net.split('').reverse().join('');
    return net === invers;
}

/**
 * 
 * NODE EXAMPLE
 * const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

 */