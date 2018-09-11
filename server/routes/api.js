var express = require('express');
var logbookController = require('../app/controllers/logbookController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/create', logbookController.insert);
router.get('/list', logbookController.list);
router.post('/endtrip', logbookController.endtrip);

module.exports = router;
