const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
let ejs = require("ejs");

var items = [];
let workItem = [];
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {

  let day =date();
  
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
  console.log(req.body.newItem);
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "WorkList", newListItem: workItem });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItem.push(item);
  res.redirect("/work");
});
app.listen(port, function () {
  console.log("Server running at http://localhost:" + port);
});
