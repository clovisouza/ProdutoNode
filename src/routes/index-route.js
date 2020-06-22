const express = require('express');
const app = express();
const Router = express.Router();





 Router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node api",
        version: "0,0,1"

    });
});



module.exports = Router;