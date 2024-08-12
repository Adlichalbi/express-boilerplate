import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; // Optional if using MongoDB
import { connectDB } from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use('/api/products', productRoutes); // Example route

// Error Handling Middleware
app.use(errorHandler);

// Connect to Database and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`App listening on port: ${PORT}`);
});
