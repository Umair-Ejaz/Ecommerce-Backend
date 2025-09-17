import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderItemRoutes from "./routes/orderItem.js";
import authRoutes from "./routes/authRoutes.js";




import Product from "./models/Product.js";
import Order from "./models/Order.js";
import OrderItem from "./models/OrderItem.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/order-items", orderItemRoutes);
app.use("/api/auth", authRoutes);



const PORT = 5000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
