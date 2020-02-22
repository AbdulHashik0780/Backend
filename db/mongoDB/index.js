const mongoose = require('mongoose');
const { connect, connection } = mongoose;
const { MongoDB: { dbURI, ...options } } = require('../../config');

connect(dbURI, { ...options });

// mongoose.set('debug', true);
// CONNECTION EVENTS
connection.on('connected', () => console.log(`Mongo Database Successfully Connected to ${dbURI}`));

connection.on('error', err => console.log(`Mongo Database connection error: ${err}`));

connection.on('disconnected', () => console.log('Mongo Database connection disconnected'));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  connection.close(() => {
    console.log('Mongo Database connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = connection;
