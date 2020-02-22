const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { PostgresSQL: database } = require('../../../config');
const db = {};

const sequelize = new Sequelize({
  ...database,
});

fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
  const model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if(db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false }).
  then(() => console.log('PostgresDB Successfully Connected')).
  catch((err) => console.error('PostgresDB Sync Error: ', err));

module.exports = db;
