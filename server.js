const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  console.log("Received Data:", queryObject);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ESP8266 Data Received\n");
});

const PORT = 80; // Port 80 for easy access
server.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
