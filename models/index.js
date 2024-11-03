const { Sequelize, Model, DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('products', 'root', 'dadabhai123', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.order = require('./order')(sequelize, Model, DataTypes);
db.stock = require('./stock')(sequelize, Model, DataTypes);
db.user = require('./user')(sequelize, Model, DataTypes);
db.sequelize.sync({ alter: true });

module.exports = db;
