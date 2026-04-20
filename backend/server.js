require("dotenv").config(); //  load env variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));


// Server
app.listen(5000, () => console.log("Server running on port 5000"));
