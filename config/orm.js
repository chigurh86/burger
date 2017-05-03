var connection = require("../config/connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??"
    connection.query(queryString, [table], function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function (table, colName, nameVal, cb){
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString,[table, colName, nameVal], function(err, res){
      cb(res);
    });
  },
  updateOne: function (table, updateCol, updateVal, selectorCol, selectorVal, cb){
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, updateCol, updateVal, selectorCol, selectorVal], function(err, res){
      cb (res);
    });
  },

  deleteOne: function(table, colName, idVal, cb){
    var queryString = 'DELETE FROM `burgers` WHERE `id` = ?'
    connection.query(queryString, 16, function(err, res) {
          cb (res);
    });
  }
}

// figure out how to get the id of the burger into second argument on the burger

module.exports = orm;
