const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema  (şablonu oluşturma)
const PostSchema = new Schema({
  title: String,
  detail:String,
  DateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
