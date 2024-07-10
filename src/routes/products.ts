import express from "express";

const router = express.Router();

router.get("/ping", (req, res) => {
  res.json({ ping: true });
});

router.get("/ping/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.json({ ping: true });
});

export default router;
