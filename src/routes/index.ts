import express from "express";

import productsRouter from "./products";

const router = express.Router();

router.use("/products", productsRouter);

router.get("/", (req, res) => {
  let name = "a";
  let lastName = "b";
  //res.send("Hello")
  res.json({ name, lastName });
});

export default router;
