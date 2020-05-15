const { Router } = require('express');
const multer = require('multer');

const Product = require('../models/Product');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

const CreateProductService = require('../services/CreateProductService');
const UpdateProductService = require('../services/UpdateProductService');
const DeleteProductService = require('../services/DeleteProductService');
const ImportProducstService = require('../services/ImportProductsService');

const productRoutes = Router();

productRoutes.get('/products', async (request, response) => {
  try {
    const products = await Product.find().select('-__v');
    return response.json(products);
  } catch (err) {
    return response.status(400).send(err.message);
  }
});

productRoutes.post('/products', upload.single('file'), async (request, response) => {
  const importProducts = new ImportProducstService();
  const products = await importProducts.execute(request.file.path);
  return response.json(products);
});

productRoutes.delete('/products/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();
    await deleteProduct.execute({
      id,
    });
    return response.status(200).send();
  } catch (err) {
    return response.status(400).send({ error: err.message });
  }
});

productRoutes.put('/products/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { title, type, rating } = request.body;
    const updateProduct = new UpdateProductService();
    const product = await updateProduct.execute({
      id, title, type, rating,
    });
    return response.json(product);
  } catch (err) {
    return response.status(400).send({ error: err.message });
  }
});

productRoutes.post('/products/add', async (request, response) => {
  try {
    const createProduct = new CreateProductService();
    const product = await createProduct.execute(request.body);
    response.send(product);
  } catch (err) {
    response.status(400).send({ error: err });
  }
});

module.exports = productRoutes;
