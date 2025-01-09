const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader('Content-Type', 'application/json');

  if (path === '/static') {
      const response = { header: "Hello", body: "Octagon NodeJS Test" };
        res.statusCode = 200;
        res.end(JSON.stringify(response));
  } else if (path === '/dynamic') {
        const { a, b, c } = parsedUrl.query;
        if(a && b && c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
            const result = (Number(a) + Number(b) + Number(c)) / 3;
             const response = {header: "Calculated", body: String(result)};
             res.statusCode = 200;
              res.end(JSON.stringify(response));
        } else {
            const response = {header: "Error"};
            res.statusCode = 400;
             res.end(JSON.stringify(response));
        }

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({header: "Not Found"}));
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
