const { Router } = require('express');

const Product = require('../models/Product');

const productRoutes = Router();

productRoutes.get('/', (request, response) => response.json({ ok: true }));

productRoutes.post('/products', (request, response) => response.json({ ok: true }));

productRoutes.put('/products', (request, response) => response.json({ ok: true }));

productRoutes.post('/products/add', async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.send({ product });
  } catch (err) {
    response.status(400).send({ error: err });
  }
});

module.exports = productRoutes;
