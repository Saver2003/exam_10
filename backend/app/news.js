const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');


const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = (db) => {
  router.get('/', (req, res) => {
    db.query('SELECT `id`, `title`, `image`, `date` FROM `news`', function (error, results) {
      if (error) throw error;

      res.send(results);
    });
  });

  router.post('/', upload.single('image'), (req, res) => {
    const oneNews = req.body;

    if (req.file) {
      oneNews.image = req.file.filename;
    } else {
      oneNews.image = null;
    }

    db.query(
      'INSERT INTO `news` (`title`, `content`, `image`) ' +
      'VALUES (?, ?, ?)',
      [oneNews.title, oneNews.content, oneNews.image],
      (error, results) => {
        if (error) throw error;

        oneNews.id = results.insertId;
        res.send(oneNews);
      }
    );
  });

  router.get('/:id', (req, res) => {
    res.send(db.getDataById(req.params.id));
  });

  return router;
};

module.exports = createRouter;