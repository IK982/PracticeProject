var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET quiz page. */
// router.get('/quiz', function(req, res, next) {
//     res.render('quiz/quiz');
//   });

router.get('/quiz', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.render('quiz/quiz');
});

  module.exports = router;