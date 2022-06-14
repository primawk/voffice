const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

router.route("/").get(clientsController.getAllClients);

module.exports = router;
