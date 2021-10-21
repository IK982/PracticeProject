var express = require('express');
var router = express.Router();
var usersService = require("../services/usersService");
require("dotenv").config()
var passport = require('passport');
var jwt = require('jsonwebtoken')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Users');
// });

// router.get('/login', function(req, res, next) {
//   res.render('users/login');
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Manager' });
});

// router.get('/login', passport.authenticate('jwt', { session: false }), function(req, res, next) {
//   res.render('users/login');
// });

// router.post('/', function(req, res) {
//   function onSuccess(result) {
//       res.redirect('/users');
//   }

//   usersService.createUser(req.body, onSuccess)
// });

router.post('/', function(req, res, next) {
  function onSuccess(success, user) {
    if (!success) {
      res.render('error', { message: 'No valid user', error: {title: 'User not recognised', message: ''} });
      return;
    }
      const token = jwt.sign({
        user: {
          username: user.username
        }
      },
      // Your secret, e.g. here set by environment variable
      process.env.AUTH_SECRET);

      res.cookie('token', token);
      res.redirect('/quiz/index');
  }

  usersService.validateLogin(req.body, onSuccess)
});

module.exports = router;
