const http = require("http");
const server = http.createServer((rew, res) => {
  console.log("request made");
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on 3000");
});
