// Dependencies
const cors = require("cors");
const express = require("express");
// const { verifyToken } = require("./middleware/auth.middleware.js");

// Route Imports
const router = require("./controllers/dataControllers.js");

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
app.use("/data", data);

// 404 Page
app.get("*", (req, res) => res.status(404).send("Page not found"));

// Export
module.exports = app;
