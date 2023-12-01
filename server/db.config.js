"user strict";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware and routes will go here
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "voluntally",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = connection;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
