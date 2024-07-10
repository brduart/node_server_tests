import { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res, next) => {
  let auth = true;

  if (auth) {
    next();
  } else {
    res.status(403).json({ error: "bloqueado" });
  }
};
