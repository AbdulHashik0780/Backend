const jwt = require('jsonwebtoken');
const {jwt: {secretKey, expires}} = require('../config');

module.exports.generateToken = (id, email) => {
    const expiresIn = expireIn(expires);
    return jwt.sign({id, email}, secretKey, {expiresIn});
};

const expireIn = (numDays) => {
    const dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
};
