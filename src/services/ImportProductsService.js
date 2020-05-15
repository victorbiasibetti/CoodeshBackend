const fs = require('fs');
const Product = require('../models/Product');

class ImportProductsService {
  async execute(importJson) {
    try {
      const productsImport = JSON.parse(fs.readFileSync(importJson, 'utf8'));
      const products = await Product.insertMany(productsImport);

      // Deleta o arquivo para não encher o servidor
      fs.unlinkSync(importJson);

      return products;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = ImportProductsService;
