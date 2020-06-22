const express = require('express');

const app = express();
const Router = express.Router();

const controller = require('../Controllers/product-controller');

Router.get('/', controller.get);
Router.get('/:slug', controller.getBySlug);
Router.get('/admin/:id', controller.getById);
Router.get('/tags/:tag', controller.getByTag);
Router.post('/', controller.post);
Router.put('/:id', controller.put);
Router.delete('/', controller.delete);

module.exports = Router;