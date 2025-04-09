import express from "express";
import { submitForm } from "../controller/formcontroller.js";

const router = express.Router();

// Form submission route
router.post("/submit", express.json(), async (req, res, next) => {
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
});

export default router;