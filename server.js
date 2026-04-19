const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);


mongoose.connect("mongodb+srv://Vani:Vani0211@cluster0.ezdvm1p.mongodb.net/ecommerce?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));