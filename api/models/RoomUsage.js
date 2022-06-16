const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const RoomUsage = sequelize.define(
  "roomusage",
  {
    startTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bookingDate: {
    //   type: DataTypes.DATEONLY,
    //   allowNull: true,
    // },

    quotaUsed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "bookingDate",
  }
);

module.exports = RoomUsage;
