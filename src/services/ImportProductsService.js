const fs = require('fs');
const Product = require('../models/Product');

class ImportProductsService {
  async execute(importFiles) {
    let productsArray = [];
    try {
      importFiles.map(async (file) => {
        const productsImport = JSON.parse(fs.readFileSync(file.path, 'utf8'));
        const products = await Product.insertMany(productsImport);

        // Deleta o arquivo para não encher o servidor
        fs.unlinkSync(file.path);
        productsArray = [...products];
      });
      return productsArray;
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = ImportProductsService;
