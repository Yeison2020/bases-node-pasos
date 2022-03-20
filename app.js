const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(404);
  res.write("404 Page not foud");
  res.end();
});

server.listen("8080");
console.log("Listening port", 8080);
