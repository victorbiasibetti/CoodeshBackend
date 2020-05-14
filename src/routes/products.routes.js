const { Router } = require('express');

const CreateProductService = require('../services/CreateProductService');

const productRoutes = Router();

productRoutes.get('/', (request, response) => response.json({ ok: true }));

productRoutes.post('/products', (request, response) => response.json({ ok: true }));

productRoutes.put('/products', (request, response) => response.json({ ok: true }));

productRoutes.post('/products/add', async (request, response) => {
  try {
    const createProduct = new CreateProductService();
    const product = await createProduct.execute(request.body);
    response.send({ product });
  } catch (err) {
    response.status(400).send({ error: err });
  }
});

module.exports = productRoutes;
