var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/get', function(req, res) {
  res.send('Suissa');
});

module.exports = router;
