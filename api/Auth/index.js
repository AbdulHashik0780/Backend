const express = require('express');
const router = express.Router();

const authController = require('./controller');

router.post('/login', authController.login);
router.post('/signUp', authController.signUp);

module.exports = router;
