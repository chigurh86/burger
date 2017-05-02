var connection = require("../config/connection.js");

module.exports = function() {
  selectAll (table, cb)
    const query = "SELECT * FROM ??";
    connection.query(query, [table], function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
}

//   insertOne (){
//     const query = "SELECT * FROM ??";
//     // connection.query("INSERT INTO burgers (burger_name) VALUES (?)",[req.body.burger_name], function(err, res) {
//     //   if (err) {
//     //     throw err;
//     //   }
//     // });
//   },
//
//   updateOne(table, condition, cb){
//     // connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?",[req.body.burger_name, req.body.id],
//     //   function(err, result) {
//     //       if (err) {
//     //      throw err;
//     //     }
//     // });
//   },
//
//   // delete(table, condition, cb){
//   //   const query = `DELETE FROM ${table} WHERE ?`;
//   //   connection.query(query,
//   //     function(err, result) {
//   //         if (err) {
//   //        throw err;
//   //       }
//   //   });
//   // }
// }
