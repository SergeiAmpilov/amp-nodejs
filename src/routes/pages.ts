import { Request, Response } from "express";

const { Router } = require("express");

const pagesRouter = Router();
pagesRouter.get('/', (req: Request, res: Response) => {
  res.render('index');
});

pagesRouter.get('/hw', (req: Request, res: Response) => {
  res.render('hw');
});

export { pagesRouter };

// module.exports = pagesRouter;
