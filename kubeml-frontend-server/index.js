const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 6060;
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server (a) running on port " + port);
});
