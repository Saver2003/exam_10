const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const news = require('./app/news');
const comments = require('./app/comments');
const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'week_news'
});

connection.connect((err) => {
  if (err) throw err;

  app.use('/news', news(connection));
  app.use('/comments', comments(connection));


  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
});