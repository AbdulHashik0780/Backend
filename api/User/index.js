const express = require('express');
const router = express.Router();

const userController = require('./controller');

router.get('/suggestedProducts', userController.getSuggestedProducts);

module.exports = router;
