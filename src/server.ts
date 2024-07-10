import express from "express";
import helmet from "helmet";
import path from "path";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.get("/ping", (req, res) => {
  res.json({ ping: true });
});

server.get("/ping/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.json({ ping: true });
});

server.get("/", (req, res) => {
  let name = "a";
  let lastName = "b";
  //res.send("Hello")
  res.json({ name, lastName });
});

server.listen(3000, () => {
  console.log("server running");
});
