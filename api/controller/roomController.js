const { Op } = require("sequelize");
const Room = require("../models/Room");
const fs = require("fs");
const sequelize = require("../configs/sequelize");

module.exports = {
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.findAll({});

      res.status(200).send(rooms);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
