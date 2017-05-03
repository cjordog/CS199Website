var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name:'hi' });
});

router.get('/name', function(req, res, next) {
  res.render('name', { title: 'Express', name:'hi' });
});

module.exports = router;
