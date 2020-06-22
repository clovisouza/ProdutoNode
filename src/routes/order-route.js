const express = require('express');

const app = express();
const Router = express.Router();

const controller = require('../Controllers/order-controller');

Router.post('/', controller.post);
Router.get('/', controller.get);

module.exports = Router;