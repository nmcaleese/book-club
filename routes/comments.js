const express = require('express');
const router = express.Router();
 
const commentsCtrl = require('../controllers/comments')

// You Do - Define the Route below
router.post('/movies/:id/comments', commentsCtrl.create)
router.delete('/comments/:id', commentsCtrl.delete)


module.exports = router;