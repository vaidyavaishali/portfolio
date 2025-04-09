import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./route/formRouter.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://vaishaliportfolio-rouge.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors()); // Handles preflight requests

app.use(express.json());

mongoose.connect("mongodb+srv://vaishvaidya11:vaishvaidya11@cluster0.ec5ttwd.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

app.use("/api/form", formRoutes);

const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;