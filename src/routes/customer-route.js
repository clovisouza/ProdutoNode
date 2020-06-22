const express = require('express');

const app = express();
const Router = express.Router();

const controller = require('../Controllers/customer-controller');

Router.post('/', controller.post);

module.exports = Router;