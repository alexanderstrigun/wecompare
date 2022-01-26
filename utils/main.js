const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

function getWheather(req, res, next) {
  req.howareyou = ["fine", "bad"];
  req.visitorWheather = false;
  next();
}

app.get("/", getWheather, (req, res) => {
  res.render("home", {
    isRaining: req.visitorWheather,
    pets: [
      { name: "Meowsalot", species: "cat" },
      { name: "Barksalot", species: "dog" },
    ],
  });
});

app.post("/result", (req, res) => {
  if (req.body.color.trim().toUpperCase() === "BLUE") {
    res.send("correct");
  } else {
    res.send("this is false");
  }
});

app.get("/about", (req, res) => {
  res.send("welcome to our about");
});
app.get("/api/pets", (req, res) => {
  res.json([
    { name: "Meowsalot", species: "cat" },
    { name: "Barksalot", species: "dog" },
  ]);
});
app.listen(4001);
