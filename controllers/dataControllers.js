const express = require("express");
const router = express.Router();
const skills = require("../db/skills.json");
const projects = require("../db/projects.json");
const nanoid = require("nanoid");
const fs = require("fs");

module.exports = router;
