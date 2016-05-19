var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/savethegame', function(req, res) {
  res.send('Path: /savethegame');
};

router.get('/savetheapp', function(req, res) {
  res.send('Path: /savetheapp');
};

router.get('/savethehair', function(req, res) {
  res.send('Path: /savethehair');
};

module.exports = router;
