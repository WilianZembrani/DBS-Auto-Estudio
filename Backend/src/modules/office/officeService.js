const db = require("../../database/connection");

exports.list = (search, callback) => {
  let sql = `
    SELECT 
      services.*, 
      users.name AS employee_name
    FROM services
    LEFT JOIN users 
      ON services.employee_id = users.id
  `;
  let values = [];

  if (search) {
    sql += `
    WHERE services.name LIKE ?
    OR services.description LIKE ?
    OR users.name LIKE ?
  `;
    values.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }
  db.query(sql, values, callback);
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
