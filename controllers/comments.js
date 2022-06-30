const Book = require("../models/book");

module.exports = {
  create,
  delete: deleteCom,
  edit,
};

function create(req, res) {
  console.log(req.body);
  Book.findById(req.params.id, function (err, book) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    book.comments.push(req.body);
    book.save(function (err) {
      res.redirect(`/books/${book._id}`);
    });
  });
}

async function deleteCom(req, res, next) {
  console.log(`START HERE`);
  console.log(`req.params`);
  try {
    const book = await Book.findOne({
      "comments._id": req.params.id,
      "comments.user": req.user._id,
    });
    if (!book) return res.redirect("/books");
    book.comments.remove(req.params.id);
    await book.save();
    res.redirect(`/books/${book._id}`);
  } catch (err) {
    return next(err);
  }
}

function edit(req, res) {
  Book.findOne({ "comments._id": req.params.id }, function (err, book) {
    const commentSubdoc = book.comments.id(req.params.id);
    if (!commentSubdoc.user.equals(req.user._id))
      return res.redirect(`/books/${book._id}`);
    commentSubdoc.content = req.body.content;
    commentSubdoc.rating = req.body.rating;
    book.save(function (err) {
      res.redirect(`/books/${book._id}`);
    });
  });
}
