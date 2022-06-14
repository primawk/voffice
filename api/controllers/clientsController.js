const { Op } = require("sequelize");
const Client = require("../models/Client");
const fs = require("fs");
const sequelize = require("../configs/sequelize");

module.exports = {
  getAllClients: async (req, res) => {
    try {
      const clients = await Client.findAll({});

      res.status(200).send(clients);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
