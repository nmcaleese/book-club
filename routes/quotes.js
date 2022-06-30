const express = require("express");
const router = express.Router();
const isLoggedIn = require('../config/auth')
const quotesCtrl = require("../controllers/quotes");

router.post("/books/:id/quotes", isLoggedIn, quotesCtrl.create);
router.delete("/quotes/:id", isLoggedIn, quotesCtrl.delete);
router.put("/quotes/:id", isLoggedIn, quotesCtrl.edit);

module.exports = router;
