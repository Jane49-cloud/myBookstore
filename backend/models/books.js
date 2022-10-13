const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  description: { type: String },
  buy_url: { type: String },
  price: { type: String },
  pages: { type: String },
  image_url: { type: String },
  create_date: { type: Date, default: Date.now },
  author: { type: String },
  publisher: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
