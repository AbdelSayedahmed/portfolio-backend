const express = require("express");
const data = express.Router();
const { getAllProjects, getAllSkills } = require("../queries/dataQueries");

data.get("/projects", async (req, res) => {
  try {
    const allProjects = await getAllProjects();
    res.status(200).json(allProjects);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

data.get("/skills", async (req, res) => {
  try {
    const allSkills = await getAllSkills();
    res.status(200).json(allSkills);
    console.log(allSkills);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = data;
