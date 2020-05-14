const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => response.json({ ok: true }));

routes.post('/products', (request, response) => response.json({ ok: true }));

module.exports = routes;
