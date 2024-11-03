module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: 'Khatri',
        // allowNull defaults to true
      },
    },
    {
      sequelize, // Pass the connection instance
      modelName: 'User', // Name of the model
    }
  );

  console.log(User === sequelize.models.User); // true
};
