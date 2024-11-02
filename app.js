// Dependencies
const cors = require("cors");
const express = require("express");
const { verifyToken } = require("./middleware/auth.middleware.js");

// Route Imports

// Configuration
const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);
app.use(express.json());

// Root Route
app.get("/", (req, res) => res.send("Welcome to Abdel's API!"));

// Routes

// 404 Page
app.get("*", (req, res) => res.status(404).send("Page not found"));

// Export
module.exports = app;
