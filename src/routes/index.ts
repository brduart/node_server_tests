import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  let name = "a";
  let lastName = "b";
  //res.send("Hello")
  res.json({ name, lastName });
});

export default router;
