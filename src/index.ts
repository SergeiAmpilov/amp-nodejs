import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { pagesRouter } from './routes/pages';

const exphbs = require('express-handlebars');


const app = express();
const {PORT = 3000} =  process.env;
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


async function start() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ampdb')
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT} !`)
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
}


start();