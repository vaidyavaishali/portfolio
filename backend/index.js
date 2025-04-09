import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./route/formRouter.js";

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://vaishaliportfolio-rouge.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());


// MongoDB Connection
mongoose.connect("mongodb+srv://vaishvaidya11:vaishvaidya11@cluster0.ec5ttwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

// Routes
app.use("/api/form", formRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;