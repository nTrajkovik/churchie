const Sequelize = require('sequelize');

const db = new Sequelize('churchie', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = db;
