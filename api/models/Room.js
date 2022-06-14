const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const RoomUsage = require("./RoomUsage");

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

Room.hasMany(RoomUsage);
RoomUsage.belongsTo(Room);

module.exports = Room;
