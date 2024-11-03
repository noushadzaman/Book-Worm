const express = require("express");
const { createAOrder, getOrderByEmail } = require("./order.controller");
const router = express.Router();

// Create an order endpoint
router.post("/", createAOrder);
// get orders by user email address
router.get(`/email/:email`, getOrderByEmail);

module.exports = router;
