const DUPLICATE_KEY_ERROR = 'DUPLICATE_KEY_ERROR';
const VALIDATION_ERROR = 'VALIDATION_ERROR';

module.exports = (err, req, res, next) => {
  if (err.isJoi) {
    return returnError(err.details.map(e => e.message), 400, VALIDATION_ERROR, res);
  }

  if (err.name === 'MongoError' && err.code === 11000) {
    return returnError(err, 400, DUPLICATE_KEY_ERROR, res);
  }

  return returnError(err, err.status, err.message, res);
};

const returnError = (error, status = 500, message, res) => res.status(status || 500)
  .json({
    success: false,
    message,
    error,
  });

