"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const pagesRouter = require("./routes/pages");
const app = express();
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, '/public')));
mongoose.set("strictQuery", false);
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(pagesRouter);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect('mongodb://127.0.0.1:27017/ampdb');
            app.listen(PORT, () => {
                console.log(`Server has been started on port ${PORT}`);
            });
        }
        catch (e) {
            console.log(`Error ${e}`);
        }
    });
}
start();
