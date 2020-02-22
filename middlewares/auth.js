const jwt = require('jsonwebtoken');

const { jwt: { secretKey } } = require('../config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401)
      .json({
        status: false,
        message: 'Access denied. No token provided.',
      });
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    if (decoded.exp <= Date.now()) {
      return res.status(400)
        .json({
          status: false,
          message: 'Token Expired',
        });
    }
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.status(400)
      .json({
        success: false,
        message: 'Invalid Token.',
      });
  }
};
