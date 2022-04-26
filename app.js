const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server running on port:", port);
});
