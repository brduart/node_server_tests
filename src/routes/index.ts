import express from "express";

import productsRouter from "./products";
import { middleware } from "../middlewares/middleware";

const router = express.Router();

router.use(middleware); //USANDO EM TODAS AS ROTAS

router.use("/products", productsRouter);

router.get("/", (req, res) => {
  let name = "a";
  let lastName = "b";
  //res.send("Hello")
  res.json({ name, lastName });
});

export default router;
