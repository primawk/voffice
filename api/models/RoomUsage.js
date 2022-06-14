const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const Client = require("./Client");
const Room = require("./Room");

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

RoomUsage.hasOne(Client);
Client.belongsTo(RoomUsage);

RoomUsage.hasOne(Room);
Room.belongsTo(RoomUsage);

module.exports = RoomUsage;
