const db = require("../db/db-config.js");

const getAllProjects = async () => {
  try {
    const allProjects = await db.any("SELECT * FROM projects");
    return allProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Server Error");
  }
};

const getAllSkills = async () => {
  try {
    const allSkills = await db.any("SELECT * FROM skills");
    return allSkills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw new Error("Server Error");
  }
};

module.exports = {
  getAllProjects,
  getAllSkills,
};
