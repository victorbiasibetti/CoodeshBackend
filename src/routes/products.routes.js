const { Router } = require('express');

const productRoutes = Router();

productRoutes.get('/', (request, response) => response.json({ ok: true }));

productRoutes.post('/products', (request, response) => response.json({ ok: true }));

productRoutes.put('/products', (request, response) => response.json({ ok: true }));

productRoutes.post('/products/add', (request, response) => response.json({ ok: true }));

module.exports = productRoutes;
