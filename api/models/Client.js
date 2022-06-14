const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const RoomUsage = require("./RoomUsage");

const Client = sequelize.define("client", {
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
  phone: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
        msg: "Please enter a valid phone number",
      },
    },
  },
  credit: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Client.hasMany(RoomUsage);
RoomUsage.belongsTo(Client);

module.exports = Client;
