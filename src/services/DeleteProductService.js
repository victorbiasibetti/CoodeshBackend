const Product = require('../models/Product');

class DeleteProductService {
  async execute({
    id,
  }) {
    try {
      await Product.deleteOne({ _id: id });
      return null;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = DeleteProductService;
