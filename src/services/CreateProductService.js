const Product = require('../models/Product');

class CreateProductService {
  async execute({
    title,
    type,
    description,
    filename,
    height,
    width,
    price,
    rating,
  }) {
    try {
      const product = await Product.create({
        title,
        type,
        description,
        filename,
        height,
        width,
        price,
        rating,
      });
      return product;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = CreateProductService;
