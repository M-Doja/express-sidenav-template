var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Doja Dev Blog' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Doja Dev Blog' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Doja Dev Blog' });
});

/* GET emailing list join page. */
router.get('/emaillist', function(req, res, next) {
  res.render('emaillist', { title: 'Doja Dev Blog' });
});

/* GET emailing list join page. */
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Doja Dev Blog' });
});

/* GET emailing list join page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Doja Dev Blog' });
});

module.exports = router;
