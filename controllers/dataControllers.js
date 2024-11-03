const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getAllSkills,
} = require("../queries/dataQueries");

router.get("/projects", async (req, res) => {
  try {
    const allProjects = await getAllProjects();
    res.status(200).json(allProjects);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/skills", async (req, res) => {
  try {
    const allSkills = await getAllSkills();
    res.status(200).json(allSkills);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});
