const { Router } = require('express');
const productRoutes = require('./products.routes');

const routes = Router();

routes.use(productRoutes);

module.exports = routes;
