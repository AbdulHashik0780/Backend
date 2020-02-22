const { PostgresSQL: database } = require('./index');

module.exports = {
  development: {
    ...database
  },
  test: {},
  production: {}
};
