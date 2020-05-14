const Product = require('../models/Product');

class UpdateProductService {
  async execute({
    id,
    title,
    type,
    rating,
  }) {
    try {
      await Product.updateOne({ _id: id }, {
        title,
        type,
        rating,
      });

      const product = await Product.findById(id);

      return product;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = UpdateProductService;
