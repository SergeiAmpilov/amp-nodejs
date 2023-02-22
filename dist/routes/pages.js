"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const pagesRouter = Router();
pagesRouter.get('/', (req, res) => {
    res.render('index');
});
pagesRouter.get('/hw', (req, res) => {
    res.render('hw');
});
module.exports = pagesRouter;
