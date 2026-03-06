import express from "express";
import cors from "cors";
import "dotenv/config";
import "./configs/cloudinary.js"
import connectDB from "./configs/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import mlRoutes from "./routes/mlRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
  origin: ["http://localhost:5173", "https://svarnika-luxe.vercel.app"],
  credentials: true,
}))

app.get('/', (req, res)=> res.send("Server is live..."))

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ml", mlRoutes);
app.use("/api/recommend", recommendationRoutes);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
  }
};

startServer();




