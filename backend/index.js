import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

app.use("/api/form", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
