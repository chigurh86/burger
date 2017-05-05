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
  insertOne: function (table, col, val, cb){
    var queryString = `INSERT INTO ${table} (${col}) VALUES ('${val}')`
    connection.query(queryString, function(err, res){
      console.log(JSON.stringify(res));
      cb(res);

    });
  },
  updateOne: function (table, col, idVal, cb){
    var queryString = 'UPDATE ' + table + ' SET ' + col + ' = 1 WHERE id = '+ idVal ;
    connection.query(queryString, function(err, res){
      console.log(res);
      cb (res);
    });
  },

  // UPDATE Customers
  // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
  // WHERE CustomerID = 1;



  deleteOne: function(table, colName, idVal, cb){
    var queryString = 'DELETE FROM ' + table + ' WHERE '+ colName + ' = ' + idVal;
    connection.query(queryString, function(err, res) {
          cb (res);
    });
  }
}

// figure out how to get the id of the burger into second argument on the burger

module.exports = orm;
