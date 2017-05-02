var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");


  router.get("/", function(req, res){
    res.render("index", { burgers: "burger" });
  });
  router.post("/api/index", function(req, res){
    res.redirect("/");
  });
  router.delete("/:id", function(req, res){

    res.redirect("/");
  });
module.exports = router;
