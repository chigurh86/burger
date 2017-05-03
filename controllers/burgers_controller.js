var orm = require("../config/orm.js")

module.exports = function(app){
  app.get("/",function(req, res){
    var data = orm.selectAll("burgers",function(result){
      res.render("index", {burgers:result});
    });
  });
  app.put("/", function(req, res){
    var data = orm.updateOne("burgers","devoured",1 ,"id",[req.body.id], function(req, result){
      res.redirect("/");
			console.log(result);
    });
  });
  app.post("/", function(req, res){
    var data = orm.insertOne("burgers", "burger_name", [req.body.burger], function(req, result){
      res.redirect("/");
      console.log(result);
    });
  });
  app.delete("/:id", function(req, res){
    var data = orm.deleteOne("burgers", "burger_name", [req.params.id], function(req, result){
      res.redirect("/");
      console.log(result);
    });
  });
}
