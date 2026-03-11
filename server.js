const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

const NAME = "Anushka Kapur";
const ROLL_NUMBER = "2023BCS0149";

app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/location", (req, res) => {
  const { latitude, longitude } = req.body;

  res.json({
    student_name: NAME,
    roll_number: ROLL_NUMBER,
    latitude: latitude,
    longitude: longitude,
    message: "Live Classroom GPS Location"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});