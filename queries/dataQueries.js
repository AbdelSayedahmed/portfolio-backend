const db = require("../db/db-config.js");

const getAllProjects = () => {
  try {
    return db.query("SELECT * FROM projects").then((data) => data.rows);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Server Error");
  }
};

const getAllSkills = () => {
  return db.query("SELECT * FROM skills").then((data) => data.rows);
};

module.exports = {
  getAllProjects,
  getAllSkills,
};
