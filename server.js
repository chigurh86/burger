var connection = require("./config/connection.js")
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var router = require("./controllers/burgers_controller.js");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.use("/", router);
// app.use(express.static(process.cwd() + "/public"));
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
