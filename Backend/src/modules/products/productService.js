const db = require("../../database/connection");

exports.list = (callback) => {
  const sql = "SELECT * FROM products";
  db.query(sql, callback);
};

exports.list;

exports.create = (dados, callback) => {
  const sql = "INSERT INTO products SET ?";
  db.query(sql, dados, callback);
};

exports.update = (dados, id, callback) => {
  const sql = "UPDATE products SET ? WHERE id = ?";
  db.query(sql, [dados, id], callback);
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], callback);
};
