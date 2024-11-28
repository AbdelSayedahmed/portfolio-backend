const express = require("express");
const data = express.Router();
const skills = require("../db/skills.json");
const projects = require("../db/projects.json");
// const nanoid = require("nanoid");
// const fs = require("fs");

// Get all skills
data.get("/skills", (req, res) => res.status(200).json(skills));

// Get all projects
data.get("/projects", (req, res) => res.status(200).json(projects));

// Get a single project
data.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projects.find((project) => project.id === id);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

module.exports = data;
