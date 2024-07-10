import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("Hello!");
});

server.listen(3000, () => {
  console.log("server ok");
});
