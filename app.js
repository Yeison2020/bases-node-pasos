const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const person = {
    name: "yeison",
    lastName: "casado",
  };
  res.write(JSON.stringify(person));
  res.end();
});

server.listen("8080");
console.log("Listening port", 8080);
