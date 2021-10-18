var express = require('express');
var router = express.Router();
var usersService = require("../services/usersService");
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users');
});

router.get('/login', function(req, res, next) {
  res.render('users/login');
});

// router.get('/login', passport.authenticate('jwt', { session: false }), function(req, res, next) {
//   res.render('users/login');
// });

router.post('/', function(req, res) {
  function onSuccess(result) {
      res.redirect('/users');
  }

  usersService.createUser(req.body, onSuccess)
});

router.post('/login', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { message: 'No valid user', error: {title: 'User not recognised', message: ''} });
      return;
    }
      res.redirect('/quiz/quiz');
  }

  usersService.validateLogin(req.body, onSuccess)
});

module.exports = router;
