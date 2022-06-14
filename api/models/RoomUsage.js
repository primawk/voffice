const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const RoomUsage = sequelize.define("roomusage", {
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookingDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  quotaUsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RoomUsage;
