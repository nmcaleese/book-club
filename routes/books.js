var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books')
//** SET UP WITH USER AUTH**
// const isLoggedIn = require('../config/auth')
//** SET UP WITH USER AUTH**



//ROUTERS WILL ESTABLISH AN ACTION (when the URL being sent to the server matches the command)
//All routers in this file begin with/books
router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new)
router.post('/', booksCtrl.create)


module.exports = router;
