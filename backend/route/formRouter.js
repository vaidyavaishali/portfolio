import express from "express";
import { submitForm } from "../controller/formcontroller.js";

const router = express.Router();

// Handle OPTIONS for preflight CORS requests
router.options("/submit", (req, res) => {
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(204).end();
});

// Form submission route with better error handling
router.post("/submit", 
  express.json(), // Ensure JSON body parsing
  async (req, res, next) => {
    try {
      await submitForm(req, res);
    } catch (error) {
      console.error("Form submission error:", error);
      res.status(500).json({ 
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      });
    }
  }
);

export default router;