const Book = require("../models/book");

module.exports = {
  index,
  new: newBook,
  create,
  show,
};

function index(req, res) {
  console.log(req.user);
  Book.find({}, function (err, books) {
    res.render("books/index", { title: "User Library", books });
  });
}

function newBook(req, res) {
  res.render("books/new", { title: "Add Book" });
}

//add { title: 'User Library', books} below when title and books are needed for rendering
function create(req, res) {
  console.log(req.body);
  let book = new Book(req.body);
  book.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/books/new');
    console.log(book);
    // for now, redirect right back to new.ejs
    res.redirect(`books`);
  });

}


function show(req, res) {
  Book.findById(req.params.id, function(err, book){
    res.render('books/show', {title: "Details", book})
})}