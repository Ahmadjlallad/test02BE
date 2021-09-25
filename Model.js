const mongoose = require("mongoose");
const Chocolate = new mongoose.Schema({
  imageUrl: String,
  title: String,
  description: String,
  numHearts: String,
  price: String,
  numViews: String,
  email: String,
});
module.exports = mongoose.model("Chocolate", Chocolate);
