const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(1024),
  },
});

module.exports = User;
