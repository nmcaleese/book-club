const express = require('express');
const router = express.Router();

 
const quotesCtrl = require('../controllers/quotes')

router.post('/books/:id/quotes', quotesCtrl.create)
router.delete('/quotes/:id', quotesCtrl.delete)
router.put('/quotes/id', quotesCtrl.edit)



module.exports = router;