const db = require("../../database/connection");

exports.listCategories = (callback) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, callback);
};
