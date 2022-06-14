const { Op } = require("sequelize");
const RoomUsage = require("../models/RoomUsage");
const fs = require("fs");
const sequelize = require("../configs/sequelize");

module.exports = {
  getAllBookings: async (req, res) => {
    try {
      const bookings = await RoomUsage.findAll({});

      res.status(200).send(bookings);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addBooking: async (req, res) => {
    try {
      let { startTime, endTime, bookingDate, quotaUsed, roomId, clientId } =
        req.body;

      const booking = await RoomUsage.create({
        startTime,
        endTime,
        bookingDate,
        quotaUsed,
        roomId,
        clientId,
      });

      res.status(200).send(booking);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
