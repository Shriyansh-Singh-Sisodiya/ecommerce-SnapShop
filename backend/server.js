const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order API
app.post("/create-order", async (req, res) => {
  const { amount } = req.body; // amount in INR
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // convert to paise
      currency: "INR",
    });
    res.json(order); // send order details back to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
