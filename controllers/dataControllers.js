const express = require("express");
const data = express.Router();
const skills = require("../db/skills.json");
const projects = require("../db/projects.json");
const nanoid = require("nanoid");
const fs = require("fs");

module.exports = data;
