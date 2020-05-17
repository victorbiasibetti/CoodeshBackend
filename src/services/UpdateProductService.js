const Product = require('../models/Product');

class UpdateProductService {
  async execute({
    id,
    title,
    type,
    price,
  }) {
    try {
      await Product.updateOne({ _id: id }, {
        title,
        type,
        price,
      });

      const product = await Product.findById(id);

      return product;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = UpdateProductService;
