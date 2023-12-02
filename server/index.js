var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World");
});

const studentRoutes = require("./routes/student.routes");
app.use("/api/v1/student", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
