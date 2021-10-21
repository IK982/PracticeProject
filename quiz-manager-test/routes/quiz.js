var express = require('express');
var router = express.Router();
var passport = require('passport');
var { adminUser, readAccess, restrictedReadAccess } = require('../security/userAccess');
// var { restrictedReadAccess } = require('../security/restrictedReadUser');
// var { readAccess } = require('../security/readUser');
// var { adminUser } = require('../security/adminUser');

/* GET quiz page. */
// router.get('/quiz', function(req, res, next) {
//     res.render('quiz/quiz');
//   });

router.get('/index', passport.authenticate('jwt', { session: false }), adminUser, restrictedReadAccess, readAccess, function(req, res, next) {
    res.render('quiz/index');
});

  module.exports = router;