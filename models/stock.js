module.exports = (sequelize, Model, DataTypes) => {
  class Stock extends Model {}

  Stock.init(
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      qty: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Stock', // We need to choose the model name
    }
  );

  // the defined model is the class itself
  console.log(Stock === sequelize.models.Stock); // true
};
