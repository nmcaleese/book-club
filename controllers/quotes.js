const Book = require('../models/book')

module.exports = {
    create,
    delete: deleteQuote,
    edit,
}

function create(req, res) {
    console.log(req.body)
    Book.findById(req.params.id, function(err, book){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        book.quotes.push(req.body);
        book.save(function(err){
            res.redirect(`/books/${book._id}`)
        })
    })
}

async function deleteQuote(req,res, next){
    console.log(`START HERE`)
    console.log(`req.params`)
try {
    const book = await Book.findOne({ 'quotes._id': req.params.id, 'quotes.user': req.user._id })
    if(!book) return res.redirect('/books')
    book.quotes.remove(req.params.id)
    await book.save()
    res.redirect(`/books/${book._id}`)
} catch(err) {
    return next(err)
}

}

function edit(req, res) {
    Book.findOne({ "quotes._id": req.params.id }, function (err, book) {
      const quoteSubdoc = book.quotes.id(req.params.id);
      if (!quoteSubdoc.user.equals(req.user._id))
        return res.redirect(`/books/${book._id}`);
      quoteSubdoc.content = req.body.content;
      quoteSubdoc.rating = req.body.rating;
      book.save(function (err) {
        res.redirect(`/books/${book._id}`);
      });
    });
  }