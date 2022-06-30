var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/books');
});


router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],

  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/books',
    failureRedirect: '/books'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function(err) {
    if(err) console.log(err)
    res.redirect('/books')
  })
})

module.exports = router;
