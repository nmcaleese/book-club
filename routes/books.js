var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books')
//** SET UP WITH USER AUTH**
// const isLoggedIn = require('../config/auth')
//** SET UP WITH USER AUTH**



//ROUTERS WILL ESTABLISH AN ACTION (when the URL being sent to the server matches the command)
router.get('/', booksCtrl.index);


module.exports = router;
