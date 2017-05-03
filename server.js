// conditionals
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var router = require("../controllers/burgers_controller.js");
// var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 3000;

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(express.static(process.cwd() + "/public"));

// method Override
app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));


app.set("view engine", "handlebars");
require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
