"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesRouter = void 0;
const { Router } = require("express");
const pagesRouter = Router();
exports.pagesRouter = pagesRouter;
pagesRouter.get('/', (req, res) => {
    res.render('index');
});
pagesRouter.get('/hw', (req, res) => {
    res.render('hw');
});
