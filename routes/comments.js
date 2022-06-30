const express = require('express');
const router = express.Router();
const isLoggedIn = require('../config/auth')
 
const commentsCtrl = require('../controllers/comments')

router.post('/books/:id/comments', isLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete)
router.put('/comments/:id', isLoggedIn, commentsCtrl.edit)


module.exports = router;