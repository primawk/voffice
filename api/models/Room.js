const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const Room = sequelize.define("room", {
  roomName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  costPerHour: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Room;
