const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    res.end('<h1>Привет, Октагон!</h1>'); 
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000/');
});