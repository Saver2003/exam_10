const express = require('express');

const router = express.Router();

const createRouter = (db) => {
  router.get('/', (req, res) => {
    db.query('SELECT `author`, `comment` FROM `comments`', function (error, results) {
      if (error) throw error;

      res.send(results);
    });
  });

  router.post('/', (req, res) => {
    const comment = req.body;

    db.query(
      'INSERT INTO `comments` (`author`, `comment`) ' +
      'VALUES (?, ?)',
      [comment.title, comment.description],
      (error, results) => {
        if (error) throw error;

        comment.id = results.insertId;
        res.send(comment);
      }
    );
  });

  router.get('/:id', (req, res) => {
    res.send(db.getDataById(req.params.id));
  });

  return router;
};

module.exports = createRouter;