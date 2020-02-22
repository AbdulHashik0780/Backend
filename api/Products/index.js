const express = require('express');
const router = express.Router();

const productController = require('./controller');

router.get('/getAll', productController.getAll);

module.exports = router;
