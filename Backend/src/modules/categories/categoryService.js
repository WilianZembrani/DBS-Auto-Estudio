const db = require("../../database/connection");

exports.createCategory = (dados, callback) => {
  const sql = "INSERT INTO categories SET ? ";
  db.query(sql, dados, callback);
};

exports.listCategories = (callback) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, callback);
};

exports.updateCategory = (dados, id, callback) => {
  const sql = "UPDATE categories SET ? WHERE id = ?";
  db.query(sql, [dados, id], callback);
};

exports.deleteCategory = (id, callback) => {
  const sql = "DELETE FROM categories WHERE id = ?";
  db.query(sql, [id], callback);
};
