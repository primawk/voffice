const { Op } = require("sequelize");
const User = require("../models/User");
const fs = require("fs");
const sequelize = require("../configs/sequelize");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({});

      res.status(200).send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
