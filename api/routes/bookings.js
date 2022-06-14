const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookingsController");

router
  .route("/")
  .get(bookingsController.getAllBookings)
  .post(bookingsController.addBooking);

module.exports = router;
