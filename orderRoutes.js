const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create Order
router.post("/", async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    const order = new Order({
      userId,
      products,
      totalAmount
    });

    await order.save();
    res.json(order);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;