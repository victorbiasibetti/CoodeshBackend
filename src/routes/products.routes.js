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

productRoutes.post('/products', upload.array('files'), async (request, response) => {
  const importProducts = new ImportProducstService();
  const products = await importProducts.execute(request.files);
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
    const { title, type, price } = request.body;
    const updateProduct = new UpdateProductService();
    const product = await updateProduct.execute({
      id, title, type, price,
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

productRoutes.get('/', (request, response) => response.json({
  routes: [
    {
      route: '/product',
      type: 'POST',
      details: 'This route use to import products file with JSON format.'
      + ' The file expect this format on all fields are required.'
      + '\nExample: [ { "title": "Brown eggs", "type": "dairy", "description":'
      + ' "Raw organic brown eggs in a basket", "filename": "0.jpg", '
      + '"height": 600, "width": 400, "price": 28.1, "rating": 4 }, ]',
    },
    {
      route: '/products',
      type: 'GET',
      details: 'Get list of all products in database.',
    },
    {
      route: '/products/:id',
      type: 'GET',
      details: 'Get a specific product in database.',
    },
    {
      route: '/products/:id',
      type: 'PUT',
      details: 'Update a specific product in database. Fields to be updated: title, type, rating.',
    },
    {
      route: '/products/:id',
      type: 'DELTE',
      details: 'Delete a specific product in database. Yes, is a hard delete.',
    },
  ],
}));

module.exports = productRoutes;
