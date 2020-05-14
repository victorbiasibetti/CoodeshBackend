const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  filename: {
    type: String,
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
