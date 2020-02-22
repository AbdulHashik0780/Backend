const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.send('Welcome to DashBoard API'));
router.use('/auth', require('../api/Auth'));
router.use('/api/v1/user', require('../api/User'));
router.use('/api/v1/products', require('../api/Products'));

module.exports = router;
