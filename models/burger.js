var orm = require("../config/orm.js");

module.exports = {
  selectAll : orm.selectAll,
  insertOne : orm.insertOne,
  updateOne : orm.updateOne,
}
