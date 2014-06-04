var express = require('express'),
    User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* POST (create) a new user */
router.post('/', function(req, res) {
  var user = new User(req.body);
  user.save(function(err) {
    if (err) {
      res.status(500);
      res.json({error: err});
    } else {
      res.status(201);
      res.json({data: user});
    }
  });
});

module.exports = router;
