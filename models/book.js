const mongoose = require('mongoose')

const Schema = mongoose.Schema


const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
        }, 
        userName: String,
        userAvatar: String
  }, {
    timestamps: true
  })


  const quoteSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
        }, 
        userName: String,
        userAvatar: String
  }, {
    timestamps: true
  })


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
    quotes: [quoteSchema],
    author: [{type: Schema.Types.ObjectId, ref: 'Author'}]
    })

    module.exports = mongoose.model('book', bookSchema)