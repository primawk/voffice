const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^[a-zA-Z. ]*$/,
        msg: "Name cannot contain number or special characters",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Please enter a valid email address",
      },
    },
  },
  password: {
    type: DataTypes.STRING(1024),
  },
});

module.exports = User;
