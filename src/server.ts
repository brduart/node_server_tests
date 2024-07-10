import express from "express";
import helmet from "helmet";
import path from "path";

import router from "./routes";
import productsRouter from "./routes/products";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.use("/products", productsRouter);
//server.use("/items", itemsRouter);
server.use("/", router);

server.listen(3000, () => {
  console.log("server running");
});
