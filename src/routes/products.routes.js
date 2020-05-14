const { Router } = require('express');

const CreateProductService = require('../services/CreateProductService');
const UpdateProductService = require('../services/UpdateProductService');

const productRoutes = Router();

productRoutes.get('/', (request, response) => response.json({ ok: true }));

productRoutes.post('/products', (request, response) => response.json({ ok: true }));

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
