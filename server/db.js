const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sitesh",
  password: "",
  host: "localhost",
  port: 5432,
  database: "student_helper"
});

module.exports = pool;
