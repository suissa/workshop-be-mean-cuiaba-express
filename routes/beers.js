var express = require('express');
var router = express.Router();
var Controller = require('../controllers/beers');


/* GET home page. */
router.get('/', function(req, res) {
  Controller.renderList(req, res);  
});

router.get('/create', function(req, res) {
  Controller.renderCreate(req, res);  
});

router.get('/:id', function(req, res) {
  Controller.renderEntity(req, res);  
});

router.get('/:id/update', function(req, res) {
  Controller.renderUpdate(req, res);  
});

router.get('/:id/remove', function(req, res) {
  Controller.renderRemove(req, res);  
});



module.exports = router;
