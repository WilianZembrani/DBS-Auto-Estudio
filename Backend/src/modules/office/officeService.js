const db = require("../../database/connection");

exports.list = (callback) => {
  const sql = "SELECT * FROM services";
  db.query(sql, callback);
};

exports.create = (dados, callback) => {
  const sql = "INSERT INTO services SET ?";
  db.query(sql, dados, callback);
};

exports.update = (dados, id, callback) => {
  const sql = "UPDATE services SET ? WHERE id = ?";
  db.query(sql, [dados, id], callback);
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM services WHERE id = ?";
  db.query(sql, [id], callback);
};
