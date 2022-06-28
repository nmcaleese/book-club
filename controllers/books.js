const Book = require('../models/book')


module.exports = {
    index,
}

function index(req, res) {
    console.log(req.user)
    Book.find({}, function (err, books){
        res.render('books/index', { title: 'User Library', books})
    })
}